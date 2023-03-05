const path = require('path')

const mixin = require('./webpack.mixin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: ['src/**/*.vue', 'src/**/*.ts', 'public/**/*', 'index.html'],
    historyApiFallback: true,
    compress: true,
    port: 8080,
    client: { overlay: false },
  },
  ...mixin,
}
