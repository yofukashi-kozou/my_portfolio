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
  å
};

// module.exports = environment;
module.exports = environment;