'use strict';

var TopUp = require('../../models/topups');

module.exports = {
  auth: false,
  handler: function(request, reply) {
    TopUp.count({}, function(err, count) {
      if (err) { reply().code(400); }
      reply({count:count});
    })
  }
};
