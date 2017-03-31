import Knex from 'knex'
import Bookshelf from 'bookshelf'
import config from 'config'

const dbConfig = config.get('db')
if (!dbConfig) throw new Error('Cannot get db config')
const knex = Knex(dbConfig)
const bookshelf = Bookshelf(knex)

export {
  knex,
  bookshelf
}

