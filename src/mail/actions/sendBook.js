import { sendMail } from './sendMail'
import path from 'path'
import fs from 'fs'

const bookPath = path
  .resolve(process.env.PWD, 'files', 'book.pdf')

export const sendBook = params => {
  const { email } = params
  const mailOptions = {
    subject: 'Правильное питане по луне',
    to: email,
    attachments: [
      {
        filename: 'Правильное питане по луне.pdf',
        content: fs.createReadStream(bookPath)
      }
    ]
  }

  return sendMail(mailOptions)
}
