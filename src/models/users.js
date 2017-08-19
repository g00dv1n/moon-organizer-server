import { bookshelf } from '../db'

export class UserModel extends bookshelf.Model {
  get tableName () {
    return 'users'
  }
}
