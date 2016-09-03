var path = require('path');

var path_target = path.resolve(__dirname, 'dist');
var path_node_modules = path.resolve(__dirname, 'node_modules');
var path_app_src = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path_target,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js.?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.txt$/,
        loader: 'raw'
      }
    ]
  },
  resolve: {
    root: [path_app_src, path_node_modules],
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
