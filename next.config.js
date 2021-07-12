const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/css')],
  },
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};
