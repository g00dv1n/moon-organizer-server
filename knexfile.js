// Update with your config settings.
const development = require('./config/development').db
const production = require('./config/production').db

module.exports = {
  development,
  production
}
