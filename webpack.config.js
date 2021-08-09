// pathモジュールの読み込み
const path = require('path');

module.exports = {
  // 開発モードにする
  mode: 'development',

  // 入力ファイルの設定
  entry: [path.resolve(__dirname, './src/index.tsx')],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // モジュール解決
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  // 開発モード設定

  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    open: true,
    port: 3000,
  },
};
