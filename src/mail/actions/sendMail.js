import { transporter } from '../transporter'

export const sendMail = params => {
  const { to, subject, html, attachments } = params
  const mailOptions = {
    to,
    subject,
    html,
    attachments,
    from: 'do-not-reply@moonorganizer.com'
  }
  return transporter.sendMail(mailOptions)
}
