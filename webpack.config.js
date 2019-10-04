const webpack = require('webpack')
const { resolve } = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: ['babel-polyfill', './app/client/index.js'],
  output: {
    publicPath: '/assets/',
    path: resolve(__dirname, './app/public/assets'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv()
  ],
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: resolve(__dirname, './app/public'),
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app/client'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg'
            }
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {
            limit: 8192,
            noquotes: true,
          }
        }
      }
    ]
  }
}
