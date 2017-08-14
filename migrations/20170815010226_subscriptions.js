const tableName = 'subscriptions'

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.raw('SET foreign_key_checks = 0;'),
    knex.schema.createTable(tableName, (table) => {
      table.increments().primary()
      table.integer('userId').unsigned().index()
      table.integer('lastOrderId').unsigned().index()
      table.dateTime('activateAt')
      table.datetime('expiredAt')

      table.foreign('userId').references('users.id')
      table.foreign('lastOrderId').references('orders.id')
    }),
    knex.raw('SET foreign_key_checks = 1;')
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.raw('SET foreign_key_checks = 0;'),
    knex.schema.dropTab(tableName),
    knex.raw('SET foreign_key_checks = 1;')
  ])
}
