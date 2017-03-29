import Koa from 'koa'
import Debug from 'debug'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import config from 'config'
import privateAPI from './api/private'
import publicAPI from './api/public'

const debug = Debug('moon-organizer')
const app = new Koa()

// setup middlewares
app.use(logger())
app.use(bodyParser())

// add debug to context for quick usage
app.context.debug = debug

// mount routers
app.use(publicAPI.routes())
app.use(privateAPI.routes())

const listen = () => {
  const PORT = config.get('PORT')
  app.listen(PORT)
  debug(`Server listen on ${PORT}`)
}

listen()

export default app
