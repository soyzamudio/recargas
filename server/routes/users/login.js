'use strict';

var User = require('../../models/user');

module.exports = {
  auth: false,
  handler: function(request, reply) {
    User.authenticate(request.payload, function(err, user) {
      if(err){ reply().code(401); }
      let token = user.token();
      user.password = null;
      reply({token:token, user:user});
    });
  }
};
