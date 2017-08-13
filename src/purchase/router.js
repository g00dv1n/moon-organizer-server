import Router from 'koa-router'
import { WPF } from '../purchase/main'
import asyncBusboy from 'async-busboy'
import {OrderModel} from '../models/orders'

const router = new Router({ prefix: '/api/purchase' })

const productInfo = {
  name: {
    ru: 'Лунный Календарь',
    ua: 'Лунный Календарь',
    en: 'Lunar Calendar'
  },
  currency: {
    ru: 'RUB',
    ua: 'UAH',
    en: 'USD'
  }
}

router.get('/getform/:locale', async ctx => {
  const fields = {
    'amount': '1',
    'currency': 'UAH',
    'productName': 'Test tovar',
    'productPrice': '1',
    'productCount': '1',
    // 'clientFirstName': 'Name',
    // 'clientLastName': 'Surname',
    'clientEmail': 'g00dv1n.private@gmail.com',
    'clientPhone': '380954939068',
    'language': ctx.params.locale || 'en',
    'returnUrl': 'http://31.43.145.164:8090/api/purchase/thankyou-page'
  }
  ctx.body = `
  <html>
    <body>
      ${WPF.buildForm(fields)}
    </body>
  </html>
  `
})

router.post('/thankyou-page', async ctx => {
  ctx.debug('thank-you-page')
  try {
    const {fields} = await asyncBusboy(ctx.req)
    console.log(fields)
  } catch (err) {
    console.log(err)
  }

  ctx.body = `
  <html>
    <body>
      <h1> Thank you page </h1>
    </body>
  </html>`
})

router.post('/purchase-callback', async ctx => {
  ctx.debug('purchase-callback')
  console.log(JSON.parse(ctx.request.rawBody))
  const wpfResponse = JSON.parse(ctx.request.rawBody)
  await new OrderModel(wpfResponse).save()
  ctx.body = WPF.createResponseObject(wpfResponse.orderReference)
})

export default router
