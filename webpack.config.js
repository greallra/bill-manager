const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const chalk = require('chalk');
const log = console.log;

//on heroku process.env.NODE_ENV ='production'
//in test environment process.env.NODE_ENV ='test'
//if neither, process.env.NODE_ENV = 'development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
console.log("NODE ENV----",process.env.NODE_ENV)
if(process.env.NODE_ENV ==='test') {
  require('dotenv').config({path: '.env.test'})
} else if(process.env.NODE_ENV ='development') {
  require('dotenv').config({path: '.env.dev'})
}
log(process.env)

//must also consider heroku env vars: https://www.udemy.com/course/react-2nd-edition/learn/lecture/7900270#questions/7775482

module.exports = (env)=>{
 const isProduction = env === 'production';
 const CSSExtract = new extractTextPlugin('styles.css');
return {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: CSSExtract.extract({
        use: [
          {
            loader:'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader:'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
    })
    }]
  },
  plugins: [
    CSSExtract,
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    })
  ],
  devtool: isProduction ? 'source-map': 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/dist/'
  }
};

}

