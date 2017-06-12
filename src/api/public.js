import Router from 'koa-router'
import { UserModel } from '../models/users'
import { ReviewModel } from '../models/reviews'
import jwt from 'jsonwebtoken'
import config from 'config'
import send from 'koa-send'
import {AVATARS_ROOT} from '../helpers/storeAvatars'
import request from 'request'


const router = new Router({prefix: '/api/public'})
const cities = require('../../world-cities-parser/cities.json')

router.get('/', ctx => {
  ctx.body = 'public API'
})

router.post('/auth', async function (ctx) {
  const {email, password} = ctx.request.body
  if (!email || !password) ctx.throw(400, 'Cannot get email from request')

  const user = await new UserModel({email}).fetch()
  if (!user) ctx.throw(400, `Cannot get user with email=${email}`)

  const match = user.get('password') === password
  if (!match) ctx.throw(403, 'Invalid password/email')

  try {
    const payload = {
      id: user.get('id'),
      email: user.get('email')
    }
    const token = jwt.sign(payload, config.get('SECRET'), {expiresIn: '1y'})
    // print token for debug
    ctx.debug('jwt token: %o', token)
    ctx.body = {jwt: token}
  } catch (e) {
    if (e.message === 'invalid token') ctx.throw(401, 'Invalid JWT')
    ctx.throw(e.status || 500, e.message)
  }
})

router.post('/review', async function (ctx) {
  const review = ctx.request.body
  if(!review.rate && !review.feedback) ctx.throw(400, 'Cannot get rate or feedback fields')
  const res = await new ReviewModel(review).save()
  ctx.body = res.toJSON()
})

router.get('/reviews', async function (ctx) {
  const res = await new ReviewModel().fetchAll()
  ctx.body = res.toJSON().sort((a, b) => b.id - a.id)
})

router.get('/avatar/:avatarUrl', async ctx => {
  try {
    await send(ctx, ctx.params.avatarUrl, {root: AVATARS_ROOT})
  } catch (err) {
    ctx.throw(404, err)
  }
})

router.get('/cities/:lang/:search', async ctx => {
  const {search, lang} = ctx.params
  const re = new RegExp(`^${search}`, 'ig')
  ctx.body = cities
    .filter((c) => re.test(c[lang || 'en']))
    .slice(0, 26)
})

// TODO удалить потом. Создано для костыльного проброса через HTTPS
router.all('/skyservice/proxy/', async (ctx, next) => {
  ctx.respond = false
  const url = 'http://94.154.233.218:3000/viber/push-handler'
  ctx.req.pipe(request(url)).pipe(ctx.res)
})

export default router
