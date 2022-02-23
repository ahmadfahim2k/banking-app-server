const mongoose = require('mongoose');
const customerSchema = require('./customerSchema');

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;