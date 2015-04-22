'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'post', path: '/auth/signup', config: require('../routes/users/register')},
  {method: 'post', path: '/auth/login', config: require('../routes/users/login')},

  {method: 'get', path: '/client_token', config: require('../routes/recharge/tokens')},
  {method: 'post', path: '/recharge/checkout', config: require('../routes/recharge/checkout')}
];
