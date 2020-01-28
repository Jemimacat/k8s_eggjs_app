'use strict';

/** @type Egg.EggPlugin */
//import { join } from 'path';
const join = require('path').join;

module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  
  validate: {
    enable: true,
    package: 'egg-validate',
  }, 
  
  /*
  query: {
    enable: true,
    path: join(__dirname, '../../egg-query'),
  }
  */

};