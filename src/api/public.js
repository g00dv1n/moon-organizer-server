import Router from 'koa-router'
import { UserModel } from '../models/users'
import { ReviewModel } from '../models/reviews'
import jwt from 'jsonwebtoken'
import config from 'config'
import send from 'koa-send'
import { AVATARS_ROOT } from '../helpers/storeAvatars'
import { sendNewPassword } from '../mail'
import { WPF } from '../purchase/main'
import randomstring from 'randomstring'

const router = new Router({ prefix: '/api/public' })
const cities = require('../../world-cities-parser/cities.json')

router.get('/', ctx => {
  ctx.body = 'public API'
})

router.post('/auth', async function (ctx) {
  const { email, password } = ctx.request.body
  if (!email || !password) ctx.throw(400, 'Cannot get email from request')

  const user = await new UserModel({ email }).fetch()
  if (!user) ctx.throw(400, `Cannot get user with email=${email}`)

  const match = user.get('password') === password
  if (!match) ctx.throw(403, 'Invalid password/email')

  try {
    const payload = {
      id: user.get('id'),
      email: user.get('email')
    }
    const token = jwt.sign(payload, config.get('SECRET'), { expiresIn: '1y' })
    // print token for debug
    ctx.debug('jwt token: %o', token)
    ctx.body = { jwt: token }
  } catch (e) {
    if (e.message === 'invalid token') ctx.throw(401, 'Invalid JWT')
    ctx.throw(e.status || 500, e.message)
  }
})

router.post('/review', async function (ctx) {
  const review = ctx.request.body
  if (!review.rate && !review.feedback) {
    ctx.throw(400, 'Cannot get rate or feedback fields')
  }
  if (review.id === null) {
    delete review.id
  }

  const res = await new ReviewModel(review).save()
  ctx.body = res.toJSON()
})

router.get('/reviews', async function (ctx) {
  const res = await new ReviewModel().fetchAll()
  ctx.body = res.toJSON().sort((a, b) => b.id - a.id)
})

router.get('/avatar/:avatarUrl', async ctx => {
  try {
    await send(ctx, ctx.params.avatarUrl, { root: AVATARS_ROOT })
  } catch (err) {
    ctx.throw(404, err)
  }
})

router.get('/cities/:lang/:search', async ctx => {
  const { search, lang } = ctx.params
  const re = new RegExp(`^${search}`, 'ig')
  ctx.body = cities.filter(c => re.test(c[lang || 'en'])).slice(0, 26)
})

router.post('/reset-password', async ctx => {
  const { email, lang = 'en' } = ctx.request.body
  if (!email) {
    ctx.throw(400, 'Cannot get email')
  }
  const user = await new UserModel({ email }).fetch()
  if (!user) {
    ctx.throw(404, 'Cannot get user with email=' + email)
  }
  const newPass = Math.random().toString(36).substring(16)
  await sendNewPassword({ lang, email, password: newPass })
  ctx.body = await new UserModel({ id: user.id, password: newPass }).save()
})

router.get('/purchase', async ctx => {
  const fields = {
    'merchantDomainName': 'www.market.ua',
    'authorizationType': 'SimpleSignature',
    'orderReference': randomstring.generate(8),
    'orderDate': '1501710845',
    'amount': '1',
    'currency': 'UAH',
    'productName': 'Test tovar',
    'productPrice': '1',
    'productCount': '1',
    'clientFirstName': 'Name',
    'clientLastName': 'Surname',
    'clientEmail': 'g00dv1n.private@gmail.com',
    'clientPhone': '380954939068',
    'merchantTransactionSecureType': 'AUTO',
    'serviceUrl': 'http://31.43.145.164:8090/api/public/purchase-callback',
    'language': 'en'
  }
  ctx.body = `
  <html>
    <body>
      ${WPF.buildForm(fields)}
    </body>
  </html>
  `
})

router.post('/purchase-callback', async ctx => {
  ctx.debug(ctx.request.body)
  console.log(ctx.request.headers)
  console.log(JSON.parse(ctx.request.rawBody))
  ctx.body = 'OK'
})

export default router
