var Webpack = require('webpack');
var path = require('path');
var appPath = path.resolve(__dirname, 'app');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

var config = {
  context: __dirname,
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(appPath, 'app.js')],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        //        loader: 'babel',
        loader: "babel-loader",
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: [nodeModulesPath]
      },
      {
        test: /\.rt/,
        loader: "react-templates-loader",
        exclude: [nodeModulesPath]
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()],
  node: {
    fs: "empty"
  },
  externals: {
    "React": "react",
    "SocketIO": "socket.io"
  }
};

module.exports = config;
