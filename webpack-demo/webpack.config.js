const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'production',
  entry: path.resolve(__dirname, 'src/js/main.js'), // 项目入口文件
  output: { // 配置输出选项
    path: path.resolve(__dirname, 'dist'), // 配置输出的路径
    filename: 'bundle.js', // 配置输出的文件名
  },
  devServer: { // 配置项
    //    "dev": "webpack-dev-server --open --contentBase src --port 3000 --hot"
    open: true,
    contentBase: 'src',
    port: '3000',
    hot: true,
  },
  plugins: [
    // 热替换，热替换不是刷新
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      // filename: 'index.html',
      hash: true, // 会在打包好的bundle.js后面加上hash串
      }
    )
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpe?g|png|gif)$/, use: [
          { loader: 'url-loader',
            options: {
              limit:20000,            // 小于20k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/'  // 图片打包后存放的目录
              }
            },
        ] },
      { test: /\.(ttf|woff|woff2|eot|svg)$/, use: ['file-loader']},
      {
        test: /\.js$/, use: 'babel-loader', exclude: /node_modules/,
      }

    ],
  },
};