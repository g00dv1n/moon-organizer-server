const tableName = 'users'

exports.up = (knex, Promise) => {
  return knex.schema.createTable(tableName, (table) => {
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
    table.json('geoData')
    table.string('countryCode')
    table.string('avatarUrl')
    table.boolean('active').defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(tableName)
}
