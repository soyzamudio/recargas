'use strict';

var Braintree = require('../../models/braintree');

module.exports = {
  handler: function(request, reply) {
    Braintree.gateway.clientToken.generate({}, function (err, response) {
      if (err) { reply().code(401); }
      reply(response.clientToken);
    });
  }
};
