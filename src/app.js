import Koa from 'koa'
import Debug from './debug'
import koaLogger from 'koa-logger'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import config from 'config'
import privateAPI from './api/private'
import publicAPI from './api/public'
import purchaseAPI from './purchase/router'
import jwtVerify from './jwtVerify'
import winston from 'winston'
import path from 'path'

const app = new Koa()
const SECRET = config.get('SECRET')
// add debug to context for quick usage
const debug = Debug()
app.context.debug = debug

// setup winston
const infoPath = path.join(process.cwd(), 'logs', 'info.log')
const errorPath = path.join(process.cwd(), 'logs', 'error.log')

winston.addColors({
  silly: 'magenta',
  debug: 'blue',
  verbose: 'cyan',
  info: 'green',
  warn: 'yellow',
  error: 'red'
})

winston.configure({
  transports: [
    new (winston.transports.Console)({
      prettyPrint: true,
      colorize: true,
      silent: false
    }),
    new (winston.transports.File)({
      name: 'info',
      filename: infoPath,
      level: 'info'

    }),
    new (winston.transports.File)({
      name: 'error',
      filename: errorPath,
      level: 'error'
    })
  ]
})

// setup middlewares
app.use(cors())
app.use(koaLogger())
app.use(bodyParser())

// error handler
const skipCodes = [401]
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (skipCodes.indexOf(err.status) === -1) {
      debug('ERROR: %o', err)
    }
    ctx.body = err.message
    ctx.status = +err.status || 500
  }
})
// mount routers
app.use(publicAPI.routes())
app.use(purchaseAPI.routes())
app.use(jwtVerify(SECRET, ['/api/public', '/api/purchase']))
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
