import { bookshelf, knex } from '../db'

export const BaseModelFactory = (tableName) => {
  return class BaseModel extends bookshelf.Model {
    static get tableName () {
      return tableName
    }
    get tableName () {
      return tableName
    }

    static dropTable () {
      return knex.schema.dropTableIfExists(this.tableName)
    }

    static createTable () {
      console.log(this.tableName)
      return knex.schema.createTable(this.tableName, this._createTableFn)
    }
    }
}
