import Knex from 'knex'
import Bookshelf from 'bookshelf'
import config from 'config'
import jsonColumns from 'bookshelf-json-columns'

const dbConfig = config.get('db')
if (!dbConfig) throw new Error('Cannot get db config')
const knex = Knex(dbConfig)
const bookshelf = Bookshelf(knex)
bookshelf.plugin(jsonColumns)

export {
  knex,
  bookshelf
}
