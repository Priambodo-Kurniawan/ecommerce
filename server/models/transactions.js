'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  itemList: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
})

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
