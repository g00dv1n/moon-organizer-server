import tape from 'tape'
import {WayForPay} from '../src/purchase/way-for-pay'
import {OrderModel} from '../src/models/orders'

const WPF = new WayForPay('test_merch_n1', 'flk3409refn54t54t*FNJRET')

const responseFromWayForPay = {
  merchantAccount: 'test_merch_n1',
  orderReference: 'G8JLNhcP',
  merchantSignature: '23862527f6494bb3cfe61abca97da179',
  amount: 1,
  currency: 'UAH',
  authCode: '226091',
  email: 'g00dv1n.private@gmail.com',
  phone: '380954939068',
  createdDate: 1502141400,
  processingDate: 1502141569,
  cardPan: '41****7674',
  cardType: 'Visa',
  issuerBankCountry: 'Ukraine',
  issuerBankName: 'PUBLIC JSC RAIFFEISEN BANK AVAL',
  recToken: '5982513b-4f84-4eb4-adfe-0bbe08f0e5d0',
  transactionStatus: 'Approved',
  reason: 'Ok',
  reasonCode: 1100,
  fee: 0.02,
  paymentSystem: 'card',
  cardProduct: 'credit',
  clientName: 'OLEKSANDR BRIK'
}

tape('test Way For Pay Response Signature', (t) => {
  t.equal(WPF._calculateResponseSignature(responseFromWayForPay),
   responseFromWayForPay.merchantSignature)
  t.end()
})

tape('test Save Order', async (t) => {
  try {
    const res = await new OrderModel(responseFromWayForPay).save()
    console.log(res.toJSON())
  } catch (err) {
    t.fail('Cannot save Order')
    console.log(err)
  }
  t.end()
})
