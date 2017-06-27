import { bookshelf, knex } from '../db'

const tableName = 'users'

const createTablePromise = () => {
  return knex.schema.createTable(tableName, function (table) {
    table.increments().primary()
    table.string('name')
    table.string('surname')
    table.string('email').unique()
    table.string('password')
    table.string('categories')
    table.json('tasks')
    table.json('tasksFrom')
    table.json('tasksOnCalendar')
    table.string('birthday')
    table.string('ip')
    table.string('countryCode')
    table.string('avatarUrl')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

const UserModel = bookshelf.Model.extend({
  tableName: tableName
})

UserModel.createTable = createTablePromise
UserModel.tableName = tableName
UserModel.drop = () => knex.schema.dropTableIfExists(UserModel.tableName)

export {
  UserModel
}
