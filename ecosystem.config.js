module.exports = {
  apps: [{
    name: 'moon-api',
    script: './dist/app.js',
    env: {
      'NODE_ENV': 'production'
    }
  }]
}
