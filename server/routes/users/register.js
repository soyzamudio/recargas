'use strict';

var User = require('../../models/user');
var Braintree = require('../../models/braintree');

module.exports = {
  auth: false,
  handler: function(request, reply){
    Braintree.gateway.customer.create({
      firstName: request.payload.firstName,
      lastName: request.payload.lastName,
    }, function (err, result) {
      if (err) { reply().code(400); }
      request.payload.braintreeId = result.customer.id;
      User.register(request.payload, function(err, user) {
        if (err) { return reply().code(401); }
        let token = user.token();
        reply({token:token, user:user});
      });
    });
  }
};
