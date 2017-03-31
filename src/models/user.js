import { bookshelf, knex } from '../db'

knex.schema.createTable('users', function (table) {
  table.increments()
  table.string('name')
  table.string('email', 128)
  table.timestamps()
})

const user = bookshelf.Model.extend({
  tableName: 'users'

})

export default user
