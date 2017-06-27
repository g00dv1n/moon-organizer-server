import { sendNewPassword } from './sendNewPasswod'

sendNewPassword({ email: 'g00dv1n.private@gmail.com', lang: 'en', password: 'ASDASDASD' })
  .then(res => console.log(res))
  .catch(err => console.log(err))
