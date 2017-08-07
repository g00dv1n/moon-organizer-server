import { UserModel } from './models/users'
import { ReviewModel } from './models/reviews'
import { knex } from './db'
import config from 'config'
import moment from 'moment'
import { fieldsTransform } from './helpers/userModelUtils'

async function seed () {
  await UserModel.drop()
  await ReviewModel.drop()

  /* CREATE USERS */
  await UserModel.createTable()
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
  await ReviewModel.createTable()
  await new ReviewModel({ rate: 5 }).save()
  /* END CREATE REVIEWS */

  await knex.destroy()
}

seed().catch((err) => {
  console.error(err)
  knex.destroy()
})
