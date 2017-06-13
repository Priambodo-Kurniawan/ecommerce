'use strict'
const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');
let app = express();
var mongoose = require('mongoose');
var cors = require('cors')
mongoose.connect('mongodb://localhost/ecommerce');
mongoose.Promise = global.Promise;

const index = require('./routes');
const items = require('./routes/items');
const customers = require('./routes/customers');
const transactions = require('./routes/transactions');

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/items', items);
app.use('/customers', customers);
app.use('/transactions', transactions);

app.listen(5000, ()=> {
  console.log('server is listening at port 5000');
})
