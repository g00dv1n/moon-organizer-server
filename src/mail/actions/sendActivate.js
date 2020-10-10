import { sendMail } from './sendMail'
import { template, subject } from '../templates/ActivateAccount'
import { sprintf } from 'sprintf-js'

export const sendActivate = params => {
  const { lang, email, password, name = 'client' } = params
  const t = template[lang]
  const s = subject[lang]
  const mailOptions = {
    to: email,
    subject: s,
    html: sprintf(t, { email, password, name })
  }
  return sendMail(mailOptions)
}
