var webpack = require('webpack');

var entry = ['./client/app.js'];
var plugins = [];
if (process.env.WEBPACK !== 'dev-server') {
  entry = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/app.js',
  ];
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
  ];
};

module.exports = {
  plugins: plugins,
  entry: entry,
  output: {
    path: __dirname + '/dist',
    filename: 'app-bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|server|test/,
        loaders: ['babel-loader'],
      },
      { test: require.resolve('react'), loader: 'expose?React', },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
};
