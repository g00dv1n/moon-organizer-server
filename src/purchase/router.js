import Router from 'koa-router'
import config from 'config'
import asyncBusboy from 'async-busboy'
import { WPF } from '../purchase/main'
import {processRegistration, processOrder, setupProductInfo} from './processing'

const router = new Router({ prefix: '/api/purchase' })

router.get('/getform/:locale', async ctx => {
  const fields = {
    'amount': '10',
    'currency': 'UAH',
    'productName': 'Test tovar',
    'productPrice': '10',
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

router.get('/form/:locale', async ctx => {
  const fields = {
    'amount': '1',
    'currency': 'UAH',
    'productName': 'Test tovar',
    'productPrice': '1',
    'productCount': '1',
    // 'clientFirstName': 'Name',
    // 'clientLastName': 'Surname',
    'clientEmail': 'g00dv1n.private@gmail.com',
    // 'clientPhone': '380954939068',
    'language': ctx.params.locale || 'en',
    'returnUrl': 'http://31.43.145.164:8090/api/purchase/thankyou-page'
  }
  ctx.body = {
    htmlForm: WPF.buildForm(fields)
  }
})

router.post('/checkout', async ctx => {
  const {user, locale = 'en', plan = 'month'} = ctx.request.body
  ctx.body = await processRegistration(user, locale.toLowerCase(), plan)
})

router.post('/thankyou-page', async ctx => {
  const url = config.get('PURCHASE_CALENDAR_RETURN_URL')
  try {
    const {fields} = await asyncBusboy(ctx.req)
    console.log(fields)
  } catch (err) {
    console.log(err)
  }
  ctx.redirect(url)
})

router.get('/price/:locale', async ctx => {
  const locale = (ctx.params.locale || 'en').toLowerCase()

  ctx.body = setupProductInfo(locale)
})

router.get('/check-env', async ctx => {
  ctx.body = config.get('PURCHASE_CALENDAR_RETURN_URL')
})

router.post('/purchase-callback', async ctx => {
  const wpfResponse = JSON.parse(ctx.request.rawBody)
  await processOrder(wpfResponse)
  ctx.body = WPF.createResponseObject(wpfResponse.orderReference)
})

export default router
