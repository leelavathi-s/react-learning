const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: __dirname + "\\src\\App.js",  
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      plugins: [new HtmlWebpackPlugin({
        filename:'index.html',
        template: __dirname +'/public/index.html'})
      ]
}