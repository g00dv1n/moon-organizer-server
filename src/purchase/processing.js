import { OrderModel } from '../models/orders'
import { UserModel } from '../models/users'
import { SubscrptionModel } from '../models/subscriptions'
import { WPF } from '../purchase/main'
import { fieldsTransform } from '../helpers/userModelUtils'
import moment from 'moment'
import randomstring from 'randomstring'
import winston from 'winston'

// constants
const reasonCode = 1100 // Ok status
const transactionStatus = 'Approved'

const baseOrderObject = {
  'productCount': '1'
  // 'amount': '1',
  // 'currency': 'UAH',
  // 'productName': 'Test tovar',
  // 'productPrice': '1',
  // 'clientFirstName': 'Name',
  // 'clientLastName': 'Surname',
  // 'clientEmail': 'g00dv1n.private@gmail.com',
  // 'clientPhone': '380954939068',
}

const productInfo = {
  productName: {
    ru: 'Лунный Календарь',
    ua: 'Лунный Календарь',
    en: 'Lunar Calendar'
  },
  currency: {
    ru: 'RUB',
    ua: 'UAH',
    en: 'USD'
  },
  productPrice: {
    ru: '179.95',
    en: '2.99',
    ua: '79.95'
  },
  amount: {
    ru: '179.95',
    en: '2.99',
    ua: '79.95'
  }
}

export const setupProductInfo = (locale) => {
  const _l = locale.toLowerCase()
  const _def = 'en'
  const _res = {}
  for (const k in productInfo) {
    _res[k] = productInfo[k][_l] ? productInfo[k][_l] : productInfo[k][_def]
  }
  return _res
}

export const createBaseOrderObject = (user, locale) => {
  return Object.assign({
    clientFirstName: user.name,
    clientLastName: user.surname,
    clientEmail: user.email
  }, baseOrderObject, setupProductInfo(locale))
}

export const processRegistration = async (user, locale) => {
  let htmlForm = null
  const checkUser = await new UserModel({ email: user.email }).fetch()

  if (checkUser) {
    const err = new Error('emailAlreadyExists')
    err.status = 400
    throw err
  }

  await new UserModel(fieldsTransform(user)).save()
  const _orderFields = createBaseOrderObject(user, locale)
  htmlForm = WPF.buildForm(_orderFields)

  return { htmlForm }
}

export const processOrder = async (order) => {
  winston.info('START ORDER PROCESSING', order)
  if (!WPF.isResponseValid(order)) {
    winston.error('INVALID SIGNAUTRE', order)
    return
  }
  if (order.reasonCode !== reasonCode ||
    order.transactionStatus !== transactionStatus) {
    winston.error('Not success order', order)
    return
  }
  try {
    // SAVE ORDER to DB
    const so = await new OrderModel(order).save()
    winston.info(`Order with orderReference=${order.orderReference} saved successfully`)

    const email = so.get('email')
    const user = await new UserModel({ email }).fetch()
    if (!user) {
      winston.error('Cannot find user with email=' + email)
      return
    }
    let subscriptions = await new SubscrptionModel({
      userId: user.get('id')
    }).fetch()

    const activateAt = moment().toDate()
    const expiredAt = moment().add(1, 'months').add(2, 'days').toDate()
    const lastOrderId = so.get('id')

    if (subscriptions) {
      subscriptions.set('activateAt', activateAt)
      subscriptions.set('expiredAt', expiredAt)
      subscriptions.set('lastOrderId', lastOrderId)
      await subscriptions.save()
      winston.info(`Subscription for users.id=${user.get('id')} updated successfully`)
    } else {
      subscriptions = await new SubscrptionModel({
        activateAt,
        expiredAt,
        lastOrderId,
        userId: user.get('id')
      }).save()
      winston.info(`Create new subscription for users.id=${user.get('id')}`)
    }

    user.set('active', true)
    winston.info(`User: id=${user.get('id')} email:${user.get('email')} activated`)
    if (!user.get('password')) {
      const password = randomstring.generate(8)
      user.set('password', password)
      winston
        .info(`User: id=${user.get('id')} email:${user.get('email')} generated password=${user.get('password')}`)
    }
    await user.save()
    winston.info(`User: id=${user.get('id')} email:${user.get('email')} saved`)
    winston.info('END ORDER PROCESSING')
  } catch (err) {
    winston.err('Cannot processOrder', err)
  }
}
