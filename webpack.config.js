module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['to-string-loader', 'css-loader'],
        options: {
          cacheDirectory: true
        }
      }
    ]
  }
}
