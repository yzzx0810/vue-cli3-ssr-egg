/* eslint valid-jsdoc: "off" */

'use strict';
const path = require("path");
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

  const config = exports = {};

  config.logger = {
    dir: path.join(appInfo.baseDir, 'logs'),
  };

  config.cluster = {
    listen: {
      port: 4444,
      hostname: '127.0.0.1',
    }
  };

  // add your middleware config here
  // config.middleware = ['prodSsr'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
