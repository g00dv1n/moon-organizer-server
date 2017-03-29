import tape from 'tape'
import { server } from '../src/app'
import supertest from 'supertest'

const request = supertest(server)
const done = (tape) => {
  return (err, res) => {
    tape.error(err, 'No error')
    tape.end()
  }
}

tape('Get public api', t => {
  request
    .get('/api/public/')
    .expect(200)
    .end(done(t))
})

tape('Get private api', t => {
  request
    .get('/api/private/')
    .expect(401)
    .end(done(t))
})

tape('Shutdown server', t => {
  server.close()
  t.end()
})
