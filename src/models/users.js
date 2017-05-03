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
    table.dateTime('birthday')
    table.date('expired_at')
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
