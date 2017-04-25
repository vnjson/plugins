

const plugins = {
  entry: {
    '__dist/plugins': './plugins/index',
  },

  output: {
    path: __dirname,
    filename: '[name].js',
  },
  watch: false,
  devtool: 'source-map',
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = [ plugins ]