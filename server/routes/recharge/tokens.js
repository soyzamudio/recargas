'use strict';

var Transaction = require('../../models/transaction');

module.exports = {
  handler: function(request, reply) {
    Transaction.gateway.clientToken.generate({}, function (err, response) {
      if (err) { reply().code(401); }
      reply(response.clientToken);
    });
  }
};
