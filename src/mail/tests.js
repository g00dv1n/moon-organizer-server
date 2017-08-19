import { Mailer, EVENTS } from './mailer'
import { sendActivate } from './actions'

const params = { email: 'g00dv1n.private@gmail.com', lang: 'ru', password: 'ASDASDASD' }
const mailer = new Mailer()

mailer.emit(EVENTS.ACTIVATE_USER, params)

sendActivate(params)
  .then(res => console.log(res))
  .catch(err => console.log(err))
