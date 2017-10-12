import { sendMail } from './sendMail'
import path from 'path'
import fs from 'fs'

export const sendBook = params => {
  const { email } = params
  const mailOptions = {
    subject: 'Правильное питане по луне',
    to: email,
    attachments: [
      {
        filename: 'Правильное питане по луне.pdf',
        content: fs.createReadStream(path.join(__dirname, 'book.pdf'))
        // path: path.join(__dirname, 'book.pdf')
      }
    ]
  }

  return sendMail(mailOptions)
}
