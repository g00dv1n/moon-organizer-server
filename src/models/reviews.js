import { bookshelf } from '../db'

export class ReviewModel extends bookshelf.Model {
  get tableName () {
    return 'reviews'
  }
}
