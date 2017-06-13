'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  imageLink: String,
  category: String,
  rating: Number,
  stock: Number,
  createdAt: Date
})

var Item = mongoose.model('Item', bookSchema);

module.exports = Item;
