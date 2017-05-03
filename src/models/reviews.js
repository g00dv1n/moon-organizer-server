import { bookshelf, knex } from '../db'

const tableName = 'reviews'

const createTablePromise = () => {
  return knex.schema.createTable(tableName, function (table) {
    table.increments().primary()
    table.text('feedback')
    table.integer('rate')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

const ReviewModel = bookshelf.Model.extend({
  tableName: tableName
})

ReviewModel.createTable = createTablePromise
ReviewModel.tableName = tableName
ReviewModel.drop = () => knex.schema.dropTableIfExists(ReviewModel.tableName)

export {
  ReviewModel
}

