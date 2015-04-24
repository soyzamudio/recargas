'use strict';

var TopUp = require('../../models/topups');

module.exports = {
  handler: function(request, reply) {
    TopUp.find({sender: request.auth.credentials._id, success: true}, function(err, topups) {
      if (err) { reply().code(400); }
      reply({topups:topups});
    });
  }
};
