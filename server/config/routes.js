'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'post', path: '/auth/signup', config: require('../routes/users/register')},
  {method: 'post', path: '/auth/login', config: require('../routes/users/login')},

  {method: 'get', path: '/client_token', config: require('../routes/recharge/tokens')},
  {method: 'post', path: '/recharge/checkout', config: require('../routes/recharge/checkout')},

  {method: 'get', path: '/account/billing', config: require('../routes/users/billing')},
  {method: 'get', path: '/account/history', config: require('../routes/users/history')},

  {method: 'get', path: '/count', config: require('../routes/recharge/count.js')}
];
