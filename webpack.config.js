const path = require('path');
const HTMPWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //this is a bundler, combile all js into a bundle
    entry:'./src/index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new HTMPWebpackPlugin({
            template:'./public/index.html'
        })
    ],
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options:{
                presets:['@babel/preset-env', '@babel/preset-react']
              }
            },
          },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
      ],
    },
  };