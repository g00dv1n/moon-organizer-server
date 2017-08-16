import { UserModel } from './models/users'
import { ReviewModel } from './models/reviews'
import { fieldsTransform } from './helpers/userModelUtils'
import { knex } from './db'
import config from 'config'
import moment from 'moment'

async function seed () {
  /* CREATE USERS */
  const users = config.get('defaultUsers')
  const models = await Promise.all(users.map(user => {
    const birthdayDate = moment(user.birthday, 'DD.MM.YYYY h:mm').unix()
    const userForSave = Object.assign({}, user, { birthday: birthdayDate })
    // return save promise
    userForSave.geoData = {
      test: 123,
      lol: 'sex'
    }
    return new UserModel(fieldsTransform(userForSave)).save()
  }))
  models.forEach(model => console.log(`Saved user: ${JSON.stringify(model.toJSON())}`))
  /* END CREATE USERS */

  /* CREATE REVIEWS */
  await new ReviewModel({ rate: 5 }).save()
  /* END CREATE REVIEWS */

  await knex.destroy()
}

seed().catch((err) => {
  console.error(err)
})
