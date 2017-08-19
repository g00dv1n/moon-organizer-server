import { bookshelf, knex } from '../db'

export const ModelFactory = (tableName, createTableFn) => {
  const model = bookshelf.Model.extend({
    tableName: tableName
  })
  model.tableName = tableName
  model.drop = () => knex.schema.dropTableIfExists(tableName)

  model.createTable = () => {
    return knex.schema.createTable(tableName, createTableFn)
  }

  return model
}
