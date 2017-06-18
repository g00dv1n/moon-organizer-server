import Koa from 'koa'
import Debug from './debug'
import logger from 'koa-logger'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import config from 'config'
import path from 'path'
import privateAPI from './api/private'
import publicAPI from './api/public'
import jwtVerify from './jwtVerify'

const app = new Koa()
const SECRET = config.get('SECRET')
// add debug to context for quick usage
const debug = Debug()
app.context.debug = debug

// setup middlewares
app.use(cors())
app.use(logger())
app.use(bodyParser())

// error handler
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    debug('ERROR: %o', err)
    ctx.body = err.message
    ctx.status = err.status
  }
})
// mount routers
app.use(publicAPI.routes())
app.use(jwtVerify(SECRET, ['/api/public']))
app.use(privateAPI.routes())

const listen = () => {
  const PORT = config.get('PORT')
  debug(`Server listen on ${PORT}`)
  return app.listen(PORT)
}
// save server for tests
const server = listen()

export {
  app,
  server
}
