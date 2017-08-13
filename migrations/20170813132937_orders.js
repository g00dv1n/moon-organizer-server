const tableName = 'orders'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments().primary()
    table.string('merchantAccount')
    table.string('orderReference')
    table.string('merchantSignature')
    table.string('amount')
    table.string('currency')
    table.string('authCode')
    table.string('email')
    table.string('clientName')
    table.string('phone')
    table.string('createdDate')
    table.string('processingDate')
    table.string('cardPan')
    table.string('cardType')
    table.string('cardProduct')
    table.string('issuerBankCountry')
    table.string('issuerBankName')
    table.string('recToken')
    table.string('transactionStatus')
    table.string('reason')
    table.string('reasonCode')
    table.string('fee')
    table.string('paymentSystem')
    table.string('repayUrl')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
