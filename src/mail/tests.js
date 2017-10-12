import { Mailer, EVENTS } from './mailer'
import { sendActivate } from './actions'

const params = { email: 'aivars1@mail.ru', lang: 'en', password: 'pJmtKdl3C' }
const mailer = new Mailer()

mailer.emit(EVENTS.ACTIVATE_USER, params)

sendActivate(params)
  .then(res => console.log(res))
  .catch(err => console.log(err))
