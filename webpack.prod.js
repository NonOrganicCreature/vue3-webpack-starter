const FileManagerPlugin = require('filemanager-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const mixin = require('./webpack.mixin')

module.exports = {
  mode: 'production',
  ...mixin,
  plugins: [
    ...mixin.plugins,
    new HtmlWebpackPlugin({ template: './index.html', publicPath: '/js' }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: 'dist/*.js',
              destination: 'dist/js',
            },
            {
              source: 'public/images',
              destination: 'dist/images',
            },
            {
              source: 'public/fonts',
              destination: 'dist/fonts',
            },
          ],
          delete: ['dist/*.js'],
        },
      },
    }),
    new FaviconsWebpackPlugin({
      publicPath: '/',
      logo: './public/favicon.png',
    }),
  ],
}
