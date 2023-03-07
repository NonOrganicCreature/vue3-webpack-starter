const path = require('path')

const mixin = require('./webpack.mixin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
  plugins: [
    ...mixin.plugins,
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
}
