// config/webpack/environment.js
const { environment } = require('@rails/webpacker');

const webpack = require('webpack');
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  Turbolinks: 'turbolinks',
}));

module.exports = environment;