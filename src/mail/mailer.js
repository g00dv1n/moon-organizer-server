import EventEmitter from 'events'
import {sendNewPassword, sendActivate} from './actions'

export const EVENTS = {
  RESET_PASSWROD: 'reset password',
  ACTIVATE_USER: 'activate user'
}

export class Mailer extends EventEmitter {
  constructor () {
    super()
    this.on(EVENTS.RESET_PASSWROD, sendNewPassword)
    this.on(EVENTS.RESET_PASSWROD, sendActivate)
  }
}
