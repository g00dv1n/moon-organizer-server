import { OrderModel } from '../models/orders'
import { UserModel } from '../models/users'
import { SubscrptionModel } from '../models/subscriptions'
import { WPF } from '../purchase/main'
import { fieldsTransform } from '../helpers/userModelUtils'
import moment from 'moment'
import randomstring from 'randomstring'
import winston from 'winston'
import { sendActivate, sendBook, sendAbandonedToMautic } from '../mail'

// constants
const reasonCode = 1100 // Ok status
const transactionStatus = 'Approved'

const expiredTransactionStatus = 'Expired'

const baseOrderObject = {
  month: {
    'productCount': '1',
    'regularMode': 'monthly',
    'regularOn': 1,
    'dateNext': moment().add(1, 'M').format('DD.MM.YYYY').toString()
  },

  year: {
    'productCount': '1',
    'regularMode': 'yearly',
    'regularOn': 1,
    'dateNext': moment().add(1, 'Y').format('DD.MM.YYYY').toString()
  }
}

const productInfo = {
  productName: {
    ru: 'Лунный Календарь',
    ua: 'Лунный Календарь',
    en: 'Moon Calendar'
  },
  currency: {
    ru: 'RUB',
    ua: 'UAH',
    en: 'USD'
  }
}

const productPrice = {
  month: {
    productPrice: {
      ru: '119.95',
      en: '3.95',
      ua: '49.95'
    },
    amount: {
      ru: '119.95',
      en: '3.95',
      ua: '49.95'
    },
    regularAmount: {
      ru: '119.95',
      en: '3.95',
      ua: '49.95'
    }
  },

  year: {
    productPrice: {
      ru: '799.95',
      en: '29.95',
      ua: '299.95'
    },
    amount: {
      ru: '799.95',
      en: '29.95',
      ua: '299.95'
    },
    regularAmount: {
      ru: '799.95',
      en: '29.95',
      ua: '299.95'
    }
  }
}

export const setupProductInfo = (locale, plan) => {
  const _l = locale.toLowerCase()
  const _def = 'en'
  const _res = {}
  const _priceInfo = productPrice[plan] || productPrice.month
  const _fullProductInfo = Object.assign({}, productInfo, _priceInfo)
  for (const k in _fullProductInfo) {
    _res[k] = _fullProductInfo[k][_l] ? _fullProductInfo[k][_l] : _fullProductInfo[k][_def]
  }
  return _res
}

export const sendActivationMails = async (user) => {
  winston.info('try to send activation mail')
  const am = await sendActivate({
    email: user.get('email'),
    password: user.get('password'),
    lang: user.get('locale')
  })
  winston.info('send activation mail', am)
  // .then(mail => winston.info('send activation mail', mail))

  if (user.get('locale') === 'ru') {
    winston.info('try to send gift book')
    const gm = await sendBook({
      email: user.get('email')
    })
    winston.info('send gift book', gm)
    // .then(mail => winston.info('send gift book', mail))
  }
}

export const createBaseOrderObject = (user, locale, plan) => {
  const selectedBaseOrderObject = baseOrderObject[plan] || baseOrderObject.month
  return Object.assign({
    clientFirstName: user.name,
    clientLastName: user.surname,
    clientEmail: user.email
  }, selectedBaseOrderObject, setupProductInfo(locale, plan))
}

export const processRegistration = async (user, locale, plan) => {
  let htmlForm = null
  user.email = UserModel.normalizeEmail(user.email)
  let checkUser = await new UserModel({ email: user.email }).fetch()

  if (checkUser && !checkUser.get('active')) {
    await checkUser.destroy()
    checkUser = null
  }

  if (checkUser) {
    const err = new Error('emailAlreadyExists')
    err.status = 400
    throw err
  }

  try {
    winston.info(`User ${user.email} try to buy.`)
    await new UserModel(fieldsTransform(user)).save()
    const _orderFields = createBaseOrderObject(user, locale, plan)
    htmlForm = WPF.buildForm(_orderFields)
    winston.info(`user saved`)
  } catch (err) {
    winston.error('Cannot processRegistration', err)
  }

  return { htmlForm }
}

export const processExpiredOrder = async (order) => {
  try {
    const email = order.email
    const user = await new UserModel({ email }).fetch()
    let firstname
    if (user) {
      firstname = user.get('name')
    } else {
      firstname = order.clientName.split(' ')[0]
    }
    await sendAbandonedToMautic({firstname, email})
    winston.info(`user ${email} added to mautic`)
  } catch (err) {
    winston.error('Cannot process Expired Order', err)
  }
}

export const processOrder = async (order) => {
  winston.info('START ORDER PROCESSING', order)
  if (!WPF.isResponseValid(order)) {
    winston.error('INVALID SIGNAUTRE', order)
    return
  }
  if (order.transactionStatus === expiredTransactionStatus) {
    await processExpiredOrder(order)
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
    const isUserActive = user.get('active')
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
    if (!isUserActive) {
      sendActivationMails(user)
        .catch(err => winston.error('Cannot send activation mail', err))
    } else {
      winston.info('already send activation mail')
    }
    winston.info('END ORDER PROCESSING')
  } catch (err) {
    winston.error('Cannot processOrder', err)
  }
}
