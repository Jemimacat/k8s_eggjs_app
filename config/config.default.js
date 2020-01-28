/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: '1568471211994_9369',

    appName: 'adminTask',

    // middleware: ['errorPage', 'errorHandler'],
    middleware: [],

    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.njk': 'nunjucks',
      },
      root: [
        path.join(appInfo.baseDir, 'app/view'),
        //path.join(appInfo.baseDir, '../egg-query/app/view'),
      ].join(',')
    },

    logger: {
      dir: path.join(appInfo.baseDir, 'logs'),
    },
  };
};