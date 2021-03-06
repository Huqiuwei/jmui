var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.kitchensink.ios.config')

var app = express()
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(3000, function (err) {
  if (err) {
    console.error(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})
