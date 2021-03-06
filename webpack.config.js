const path = require('path');

const SRC_DIR = path.join(__dirname, 'client');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: path.join(SRC_DIR, 'app.js'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};