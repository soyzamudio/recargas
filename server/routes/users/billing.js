'use strict';

var Braintree = require('../../models/braintree');

module.exports = {
  handler: function(request, reply) {
    Braintree.gateway.customer.find(request.auth.credentials.braintreeId, function(err, customer) {
      if (err) { reply().code(400); }
      reply({customer:customer});
    });
  }
};
