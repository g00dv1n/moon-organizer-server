import nodemailer from 'nodemailer'
import config from 'config'

const transporterFabric = () => {
  const mailConfig = config.get('mail')
  return nodemailer.createTransport(
    Object.assign(mailConfig, {
      secure: true
    })
  )
}

export const transporter = transporterFabric()
