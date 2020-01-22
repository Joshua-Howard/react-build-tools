const path = require('path');

module.exports = {
  entry: './Frontend/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'Frontend', 'public')
  },
  output: {
    path: path.join(__dirname, 'Frontend', 'public'),
    filename: 'bundle.js'
  }
};
