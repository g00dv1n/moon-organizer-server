require('babel-register')
// parse file name for cmd or use app.js
require(global.process.argv[2] || './src/app')
