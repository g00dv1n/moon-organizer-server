import { sendMail } from './sendMail'
import { template, subject } from '../templates/ActivateAccount'
import { sprintf } from 'sprintf-js'
import path from 'path'

export const sendActivate = params => {
  const { lang, email, password } = params
  const t = template[lang]
  const s = subject[lang]
  const mailOptions = {
    to: email,
    subject: s,
    html: sprintf(t, { email, password })
  }

  // TODO КОСТЫЛЬ
  if (lang === 'ru') {
    mailOptions.attachments = [
      {
        filename: 'Правильное питане по луне.pdf',
        path: path.join(__dirname, 'book.pdf')
      }
    ]
  }
  return sendMail(mailOptions)
}
