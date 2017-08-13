import { bookshelf } from '../db'
import _ from 'lodash'
import moment from 'moment'

const _unitime2Date = (unixtime) => {
  if (!unixtime) {
    return
  }
  return moment.unix(unixtime).toDate()
}

export class OrderModel extends bookshelf.Model {
  constructor (attributes, options) {
    const orderFields = [
      'merchantAccount',
      'orderReference',
      'merchantSignature',
      'amount',
      'currency',
      'email',
      'clientName',
      'phone',
      'createdDate',
      'processingDate',
      'cardPan',
      'cardType',
      'cardProduct',
      'issuerBankCountry',
      'issuerBankName',
      'recToken',
      'transactionStatus',
      'reason',
      'reasonCode',
      'fee',
      'paymentSystem',
      'repayUrl'
    ]

    const unixTimeFields = ['createdDate', 'processingDate']

    const pickedFields = _.pick(attributes, orderFields)

    unixTimeFields.forEach(f => {
      pickedFields[f] = _unitime2Date(pickedFields[f])
    })

    super(pickedFields, options)
  }
  get tableName () {
    return 'orders'
  }
}
