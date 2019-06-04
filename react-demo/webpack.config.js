var path = require('path');
var webpack = require('webpack');
var newHtmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    contentBase: 'src',
    port: '3000'
  },
  plugins: [
    new newHtmlWebpackPlugins({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader?modules', 'sass-loader'] },
      { test: /\.jpg|gif|bmp$/, loader: 'url-loader file-loader'},
      { test: /\.js|jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
  },
  resolve: {
    // 隐藏后缀名
    extensions: ['.js', '.jsx', 'json', '.vue'],
    alias: {
      // 别名
      '@': path.join(__dirname, './src')
    },
  }
};