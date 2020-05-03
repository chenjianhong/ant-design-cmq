const path = require('path');
const CleanCSSPlugin = require("less-plugin-clean-css");


module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    library: 'ant-design-cmq',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js','.css', '.less'],
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
            plugins: [
                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                ["import", {
                    "libraryName": "vant",
                    "libraryDirectory": "es",
                    "style": true
                }]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, 
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              // modules: true, // 开启css modules
              modules: {  // 开启css modules，同时配置对应的classname生成方式，具体变量含义：https://github.com/webpack/loader-utils#interpolatename
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            }
          }, 
          {
            loader: "less-loader", // compiles Less to CSS
            options: { 
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
        ],
      },
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