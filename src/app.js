import Koa from 'koa'
import logger from 'koa-logger'

const app = new Koa()

app.use(logger())

// response
app.use(async ctx => {
  ctx.body = 'Hello g00dv1n!'
})

app.listen(8081)
