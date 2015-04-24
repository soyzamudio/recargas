'use strict';

var mongoose = require('mongoose');
var TopUp;

var topupSchema = mongoose.Schema({
  topupId: String,
  status: String,
  type: String,
  amount: String,
  success: Boolean,
  sender: {type: mongoose.Schema.ObjectId, ref: 'User'},
  receiver: String,
  country: String,
  provider: String,
  createdAt: Date
});

TopUp = mongoose.model('TopUp', topupSchema);
module.exports = TopUp;
