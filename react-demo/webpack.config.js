const path = require('path');
const webpack = require('webpack');
const newHtmlWebpackPlugins = require('html-webpack-plugin');
// 创建一个插件的实例对象

const htmlPlugin = new newHtmlWebpackPlugins({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html' // 生成的内存中首页的名称
  });

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    contentBase: 'src',
    port: '3000'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    htmlPlugin
  ],
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules', 'sass-loader'] },
      // { test: /\.jpg|gif|bmp$/, use: 'url-loader file-loader'},
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ],
  },
  resolve: {
    // 隐藏后缀名
    extensions: ['.js', '.jsx', 'json'],
    alias: {
      // 别名
      '@': path.join(__dirname, './src')
    },
  }
};