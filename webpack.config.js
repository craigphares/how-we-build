const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.(fnt|obj|mtl|dae|gltf)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'server/index.html' },
      { from: 'server/fonts', to: 'fonts' },
      { from: 'node_modules/Aframe-Material/assets', to: 'assets' }
    ], {})
  ]
};