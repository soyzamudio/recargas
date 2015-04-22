'use strict';

var mongoose = require('mongoose');
var TopUp;

var topupSchema = mongoose.Schema({
  topupId: String,
  status: String,
  type: String,
  amount: String,
  createdAt: Date,
  success: Boolean
});

TopUp = mongoose.model('TopUp', topupSchema);
module.exports = TopUp;
