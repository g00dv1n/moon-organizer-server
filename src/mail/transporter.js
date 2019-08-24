import nodemailer from 'nodemailer'
import config from 'config'

const transporterFabric = () => {
  const mailConfig = Object.assign({}, config.get('mail'))
  mailConfig.auth = {
    user: process.env.SES_USER,
    pass: process.env.SES_PWD
  }
  return nodemailer.createTransport(
    Object.assign(mailConfig, {
      secure: true
    })
  )
}

export const transporter = transporterFabric()
