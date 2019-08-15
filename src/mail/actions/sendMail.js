import { transporter } from '../transporter'

export const sendMail = params => {
  const { to, subject, html, attachments } = params
  const mailOptions = {
    to,
    subject,
    html,
    attachments,
    from: 'Moon Organizer <moon.organizer@gmail.com>'
  }
  return transporter.sendMail(mailOptions)
}
