const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Імпорт HtmlWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',  
  stats: {
    children: true, 
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, 'src/pages/assets/images'),
              to: path.resolve(__dirname, 'dist/assets/images')
          }
      ]
  }),
  new MiniCssExtractPlugin({
    filename: './css/style.css', 
  }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'), 
    port: 8080, 
    open: true, 
    hot: true, 
    compress: true, 
  },
};
