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
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
