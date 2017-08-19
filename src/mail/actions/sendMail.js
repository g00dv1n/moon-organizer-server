import { transporter } from '../transporter'

export const sendMail = params => {
  const { to, subject, html } = params
  const mailOptions = {
    to,
    subject,
    html,
    from: 'do-not-reply@moonorganizer.com'
  }
  return transporter.sendMail(mailOptions)
}
