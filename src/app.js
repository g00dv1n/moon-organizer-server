import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import config from 'config'
import debug from './debug'
import privateAPI from './api/private'
import publicAPI from './api/public'
import jwtVerify from './jwtVerify'

const app = new Koa()
const SECRET = config.get('SECRET')

// setup middlewares
app.use(logger())
app.use(bodyParser())

// add debug to context for quick usage
app.context.debug = debug()

// mount routers
app.use(publicAPI.routes())
app.use(jwtVerify(SECRET))
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
