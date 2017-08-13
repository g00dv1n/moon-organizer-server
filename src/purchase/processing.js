import Debug from 'debug'
import {OrderModel} from '../models/orders'
import {UserModel} from '../models/users'
import { WPF } from '../purchase/main'
import { fieldsTransform } from '../helpers/userModelUtils'

const debug = Debug('moon-organizer')

// constants
const reasonCode = 1100 // Ok status
const transactionStatus = 'Approved'

const baseOrderObject = {
  'amount': '1',
  'productCount': '1'
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
  try {
    new UserModel(fieldsTransform(user)).save()
    const _orderFields = createBaseOrderObject(user, locale)
    htmlForm = WPF.buildForm(_orderFields)
  } catch (err) {
    console.log(err)
  }
  return {htmlForm}
}

export const processOrder = async (order) => {
  if (order.reasonCode !== reasonCode ||
         order.transactionStatus !== transactionStatus) {
    debug('Not success order')
    console.log(order)
  }
  try {
    const so = await new OrderModel(order).save()
  } catch (err) {

  }
}
