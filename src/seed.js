import User from './models/user'

const user = new User()
user.set('name', 'Joe')
user.set('email', 'joe@example.com')
user.set('age', 28)

user.save().then(u => {
  console.log('User saved:', u.get('name'))
})
