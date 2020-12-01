import { bookshelf } from '../db'

export class UserModel extends bookshelf.Model {
  static normalizeEmail (email) {
    return email.trim().replace(/[ \t]/ig, '').toLowerCase()
  }
  get tableName () {
    return 'users'
  }
}
