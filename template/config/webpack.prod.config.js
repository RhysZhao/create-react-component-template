/*
 * Author  rhys.zhao
 * Date  2022-01-28 15:24:07
 * LastEditors  rhys.zhao
 * LastEditTime  2022-06-07 10:29:08
 * Description
 */
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); // 引用公共的配置

const prodConfig = {
  mode: 'production',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../lib/'),
    filename: 'index.js',
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default' // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
  plugins: [],
  externals: {
    // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
};

module.exports = merge(prodConfig, baseConfig); // 将baseConfig和prodConfig合并为一个配置
