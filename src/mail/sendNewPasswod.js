import { transporter } from './transporter'
import { template, subject } from './langTemplates'
import { sprintf } from 'sprintf-js'

export const sendNewPassword = params => {
  const { lang, email, password } = params
  const t = template[lang]
  const s = subject[lang]
  const mailOptions = {
    from: 'do-not-reply@moonorganizer.com',
    to: email,
    subject: s,
    html: sprintf(t, {password})
  }
  return transporter.sendMail(mailOptions)
}
