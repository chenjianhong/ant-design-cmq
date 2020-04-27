const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    library: 'ant-design-cmq',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'components'),
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  },
    externals: {
        react : {
            commonjs: 'react',
            commonjs2: 'react',
        },
        antd : {
            commonjs: 'antd',
            commonjs2: 'antd',
        }
    }
};