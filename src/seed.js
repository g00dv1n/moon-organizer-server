import { UserModel, createTablePromise, tableName } from './models/user'
import { knex } from './db'
import config from 'config'
import moment from 'moment'

async function seed () {
  await drop()
  await createTablePromise()
  const users = config.get('defaultUsers')
  const models = await Promise.all(users.map(user => {
    const birthdayDate = moment(user.birthday, 'DD.MM.YYYY h:mm').toDate()
    const userForSave = Object.assign({}, user, {birthday: birthdayDate})
    // return save promise
    return new UserModel(userForSave).save()
  }))
  models.forEach(model => console.log(`Saved user: ${JSON.stringify(model.toJSON())}`))
  console.log('SELECT:')
  const res = await new UserModel({email: 'g00dv1n.private@gmail.com'}).fetch()
  console.log(res.toJSON())
  await knex.destroy()
}

function drop () {
  return knex.schema.dropTableIfExists(tableName)
}

seed().catch((err) => {
  console.error(err)
  knex.destroy()
})



