import { sendActivate } from './actions'

const params = { email: 'g00dv1n.private@gmail.com', lang: 'en', password: 'pJmtKdl3C' }

sendActivate(params)
  .then(res => console.log(res))
  .catch(err => console.log(err))
