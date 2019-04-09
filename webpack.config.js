const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve('dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },

      {
        test: [/\.css$/],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  }
}
