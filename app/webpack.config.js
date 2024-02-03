// config/webpack/environment.js
const { environment } = require('@rails/webpacker');

const webpack = require('webpack');
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  Turbolinks: 'turbolinks',
}));

// 'entry'を直接指定するのではなく、environment.config.mergeを使用してマージします
environment.config.merge({
  entry: {
    main: 'app/javascript/application.js'
  },
  // 他の設定...
});

module.exports = environment;
