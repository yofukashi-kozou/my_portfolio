// config/webpack/environment.js
const { environment } = require('@rails/webpacker');

const webpack = require('webpack');
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  Turbolinks: 'turbolinks',
}));

module.exports = {
  entry: {
    main: 'app/javascript/application.js'
  },
  // 他の設定...
};

// module.exports = environment;
module.exports = environment;