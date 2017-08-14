import { bookshelf } from '../db'
import { UserModel } from './users'
import { OrderModel } from './orders'

export class SubscrptionModel extends bookshelf.Model {
  get tableName () {
    return 'subscriptions'
  }
  user () {
    this.belongsTo(UserModel)
  }
  lastOrder () {
    this.belongsTo(OrderModel)
  }
}
