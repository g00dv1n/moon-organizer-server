import { bookshelf } from '../db'

export class OrderModel extends bookshelf.Model {
  get tableName () {
    return 'orders'
  }
}
