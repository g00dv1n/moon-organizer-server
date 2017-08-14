import Debug from 'debug'
import { OrderModel } from '../models/orders'
import { UserModel } from '../models/users'
import { SubscrptionModel } from '../models/subscriptions'
import { WPF } from '../purchase/main'
import { fieldsTransform } from '../helpers/userModelUtils'
import moment from 'moment'

const debug = Debug('moon-organizer')

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
  if (order.reasonCode !== reasonCode ||
    order.transactionStatus !== transactionStatus) {
    console.log('Not success order')
    console.log(order)
  }
  try {
    const so = await new OrderModel(order).save()
    const email = so.get('email')
    const user = await new UserModel({email}).fetch()
    if (!user) {
      console.log('Cannot find user')
      return
    }
    const subscriptions = await new SubscrptionModel({
      userId: user.get('id'),
      lastOrderId: so.get('id'),
      activateAt: moment().toDate(),
      expiredAt: moment().add(1, 'months').add(2, 'days').toDate()
    })
    user.set('active', true)
    user.set('password', 'admin123')
    await user.save()
    console.log(subscriptions.toJSON())
  } catch (err) {
    console.log('Cannot processOrder')
    console.log(err.message)
  }
}
