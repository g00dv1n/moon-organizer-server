import crypto from 'crypto'
import moment from 'moment'
import randomstring from 'randomstring'
import config from 'config'

export class WayForPay {
  constructor (merchantAccount, merchantPassword) {
    if (typeof merchantAccount !== 'string' || !merchantAccount) {
      throw new Error('Merchant account must be string and not empty')
    }

    if (typeof merchantPassword !== 'string' || !merchantAccount) {
      throw new Error('Merchant password must be string and not empty')
    }

    /*
        Define class fiedls
    */
    this.PURCHASE_URL = 'https://secure.wayforpay.com/pay'
    this.API_URL = 'https://api.wayforpay.com/api'

    this.REQUEST_SIGNAUTRE_FIELDS = [
      'merchantAccount',
      'merchantDomainName',
      'orderReference',
      'orderDate',
      'amount',
      'currency',
      'productName',
      'productCount',
      'productPrice'
    ]

    this.RESPONSE_SIGNATURE_FIELDS = [
      'merchantAccount',
      'orderReference',
      'amount',
      'currency',
      'authCode',
      'cardPan',
      'transactionStatus',
      'reasonCode'
    ]
    /*
        end define
    */

    this._merchantAccount = merchantAccount
    this._merchantPassword = merchantPassword
    this._serviceUrl = config.get('PURCHASE_CALLBACK_URL')
    this._merchantDomainName = config.get('MERCHANT_DOMAIN_NAME')
  }

  buildForm (fiedls) {
    const fullFields = this._getFullRequestFields(fiedls)
    const merchantSignature = this._calculateRequestSignature(fullFields)
    fullFields.merchantSignature = merchantSignature

    let form = `<form method="POST" action="${this.PURCHASE_URL}" accept-charset="utf-8">\n`

    for (const key in fullFields) {
      form += `<input type="text" name="${key}" value="${fullFields[key]}" />\n`
    }
    form += '<input type="submit" value="Submit purchase form"></form>'
    return form
  }

  createResponseObject (orderReference) {
    const status = 'accept'
    const time = moment().unix()
    const concatStr = [orderReference, status, time]
      .join(';')
    const hmac = crypto.createHmac('md5', this._merchantPassword)
    hmac.update(concatStr)
    const signature = hmac.digest('hex')
    return {
      orderReference,
      status,
      time,
      signature
    }
  }

  isResponseValid (responseObject) {
    return this
      ._calculateResponseSignature(responseObject) === responseObject.merchantSignature
  }
  _calculateResponseSignature (responseObject) {
    return this._calculateSignature(responseObject, this.RESPONSE_SIGNATURE_FIELDS)
  }
  _calculateRequestSignature (fullFields) {
    return this._calculateSignature(fullFields, this.REQUEST_SIGNAUTRE_FIELDS)
  }
  _getFullRequestFields (fiedls) {
    return Object.assign({}, fiedls, {
      merchantAccount: this._merchantAccount,
      merchantTransactionSecureType: 'AUTO',
      transactionType: 'PURCHASE',
      authorizationType: 'SimpleSignature',
      orderDate: moment().unix().toString(),
      orderReference: randomstring.generate(16),
      serviceUrl: this._serviceUrl,
      merchantDomainName: this._merchantDomainName,
      language: 'AUTO',
      returnUrl: config.get('PURCAHSE_RETURN_URL')
    })
  }

  _calculateSignature (_fields, _signatureFieldsArray) {
    const concatStr = _signatureFieldsArray
      .map(field => _fields[field])
      .join(';')
    const hmac = crypto.createHmac('md5', this._merchantPassword)
    hmac.update(concatStr)
    return hmac.digest('hex')
  }
}
