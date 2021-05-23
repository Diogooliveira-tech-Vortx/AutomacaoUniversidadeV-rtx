require('babel-core/register')

const chromedriver = require('chromedriver');

module.exports = {

  src_folders: ['tests'],
  page_objects_path: './pages',
  globls_path: './hooks/globals.js',

  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: 9515
  },

  test_settings: {
    default: {

      globals: {
        imagesRepo: './tests_output/images/',
      },

      desiredCapabilities: {
        browserName: "chrome"
      },

      "screenshots": {
        "enabled": true,
        "on_failure": true,
        "on_error": true,
        "path": "./tests_output/images/",
      },
    },
  },
};


