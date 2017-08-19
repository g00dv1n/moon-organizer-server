import { sendMail } from './sendMail'
import { template, subject } from '../templates/ResetPassword'
import { sprintf } from 'sprintf-js'

export const sendNewPassword = params => {
  const { lang, email, password } = params
  const t = template[lang]
  const s = subject[lang]
  const mailOptions = {
    to: email,
    subject: s,
    html: sprintf(t, {password})
  }
  return sendMail(mailOptions)
}
