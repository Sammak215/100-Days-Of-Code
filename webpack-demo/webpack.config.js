const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    index:{ import :  './src/index.js'},
    print: './src/print.js',
    // abc: { import: './src/abc.js'},
  
  },

  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Output Management',
      title: 'Development',
    }),
  ],
  output: {
    // filename: 'main.js',
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  
};