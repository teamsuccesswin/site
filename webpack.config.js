//  Still deciding if I like pre comma lines to make it look 'cleaner' in commits and styling for this
var path              = require('path')
  , webpack           = require('webpack')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , ExtractTextPlugin   = require('extract-text-webpack-plugin');

var BUILD_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './app/index.js',
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap!sass-loader'})
      }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    //  Handles HTML File build
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './app/index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
};
