const { environment } = require('@rails/webpacker')

const webpack = require('webpack');
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  Turbolinks: 'turbolinks',
}));

const entryPath = '/app/javascript/application.js'; // エントリーポイントの正しいパスを指定


environment.config.merge({
  entry: {
    application: entryPath,
  },
});

module.exports = environment
