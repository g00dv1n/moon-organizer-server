import { UserModel } from '../models/users'
import { fieldsTransform } from '../helpers/userModelUtils'
import _ from 'lodash'
import moment from 'moment'

export const processAnonRegistration = async (orderData) => {
  const {clientName} = orderData
  const email = UserModel.normalizeEmail(orderData.email)

  const [name, surname] = clientName.split(' ').map(s => _.capitalize(s))
  const birthday = moment().unix().toString()
  // set all categories
  const categories = [
    'relationship',
    'beauty',
    'business',
    'fishing',
    'garden',
    'health',
    'house',
    'lucky',
    'shopping'
  ]

  // set en as default locale
  const locale = 'en'
  // active flag and password we will set later
  const userData = {name, surname, email, birthday, categories, locale}

  const userModel = new UserModel(fieldsTransform(userData))

  await userModel.save()

  return userModel
}
