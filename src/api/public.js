import Router from 'koa-router'
import { UserModel } from '../models/users'
import { ReviewModel } from '../models/reviews'
import jwt from 'jsonwebtoken'
import config from 'config'


const router = new Router({prefix: '/api/public'})

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
    const token = jwt.sign(payload, config.get('SECRET'), {expiresIn: '24h'})
    // print token for debug
    ctx.debug('jwt token: %o', token)
    ctx.body = {jwt: token}
  } catch (e) {
    if (e.message === 'invalid token') ctx.throw(401, 'Invalid JWT')
    ctx.throw(e.status || 500, e.message)
  }
})

router.post('/review', async function (ctx) {
  const {rate, feedback} = ctx.request.body
  if(!rate && !feedback) ctx.throw(400, 'Cannot get rate or feedback fields')
  const res = await new ReviewModel({rate, feedback}).save()
  ctx.body = res.toJSON()
})

export default router

