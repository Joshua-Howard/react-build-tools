const path = require('path');

module.exports = {
  entry: './Frontend/index.js',
  output: {
    path: path.join(__dirname, 'Frontend', 'public'),
    filename: 'bundle.js'
  }
};
