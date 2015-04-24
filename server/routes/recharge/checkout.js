'use strict';

var Braintree = require('../../models/braintree');
var TopUp = require('../../models/topups');

module.exports = {
  handler: function(request, reply) {
    var nonce = request.payload.nonce, receiver = request.payload.receiver;
    Braintree.gateway.transaction.sale({amount: '5.00', paymentMethodNonce: nonce }, function (err, result) {
      if (err) { reply().code(400); }
      var transaction = new TopUp({
        topupId: result.transaction.id,
        status: result.transaction.status,
        type: result.transaction.type,
        amount: result.transaction.amount,
        createdAt: result.transaction.createdAt,
        success: result.success,
        sender: request.auth.credentials._id,
        receiver: receiver
      });
      console.log(transaction);
      transaction.save(function(err) {
        if (err) { reply().code(400); }
        reply({transaction:transaction});
      });
    });
  }
};
