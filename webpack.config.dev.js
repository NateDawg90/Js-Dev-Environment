import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that has reference to bundle.js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
  ],
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'babel'
      },
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
