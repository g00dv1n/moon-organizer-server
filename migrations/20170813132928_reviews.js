const tableName = 'reviews'

exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists(tableName, (table) => {
    table.increments().primary()
    table.text('feedback')
    table.integer('rate')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  // return knex.schema.dropTableIfExists(tableName)
}
