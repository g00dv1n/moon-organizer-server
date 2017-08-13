import { UserModel } from './models/users'
import { ReviewModel } from './models/reviews'
import { OrderModel } from './models/orders'
import { knex } from './db'
import config from 'config'
import moment from 'moment'
import { fieldsTransform } from './helpers/userModelUtils'

async function seed () {
  /* CREATE USERS */
  const users = config.get('defaultUsers')
  const models = await Promise.all(users.map(user => {
    const birthdayDate = moment(user.birthday, 'DD.MM.YYYY h:mm').unix()
    const userForSave = Object.assign({}, user, { birthday: birthdayDate })
    // return save promise
    return new UserModel(fieldsTransform(userForSave)).save()
  }))
  models.forEach(model => console.log(`Saved user: ${JSON.stringify(model.toJSON())}`))
  /* END CREATE USERS */

  /* CREATE REVIEWS */
  await new ReviewModel({ rate: 5 }).save()
  /* END CREATE REVIEWS */
  const res = await new OrderModel().save()
  console.log(res.toJSON())

  await knex.destroy()
}

seed().catch((err) => {
  console.error(err)
})
