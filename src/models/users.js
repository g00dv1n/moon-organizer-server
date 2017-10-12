import { bookshelf } from '../db'

export class UserModel extends bookshelf.Model {
  static normalizeEmail (email) {
    return email.replace(/[ \t]/ig, '')
  }
  get tableName () {
    return 'users'
  }
}
