import nodemailer from 'nodemailer'
import config from 'config'

const transporterFabric = () => {
  const mailConfig = config.get('mail')
  return nodemailer.createTransport(
    Object.assign(mailConfig, {
      secure: false,
      tls: { rejectUnauthorized: false }
    })
  )
}

export const transporter = transporterFabric()
