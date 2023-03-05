const FileManagerPlugin = require('filemanager-webpack-plugin')

const mixin = require('./webpack.mixin')

module.exports = {
  mode: 'production',
  ...mixin,
  plugins: [
    ...mixin.plugins,
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
          ],
          delete: ['dist/*.js'],
        },
      },
    }),
  ],
}
