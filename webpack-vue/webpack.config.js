const path = require('path');
const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),  // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),    // 打包后的目录，必须是绝对路径
    filename: 'bundle.js', // 打包后的文件名称
  }, // 出口文件
  module: {  // 处理对应模块
    rules: [
      { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader']},
      { test:/\.vue$/, use: ['vue-loader']},
      { test:/\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],  // 对应的插件
  devServer: {
    open: true,
    // contentBase: '',
    port: 3000,
    hot: true,
  }, // 开发服务器配置
  mode: 'development',   // 模式配置
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.js"
    },
  },
};