const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: './index.js',
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  }
}
