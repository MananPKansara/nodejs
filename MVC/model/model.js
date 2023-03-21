const mongoose = require('mongoose');
const schema = require('./schema.js');

let model = mongoose.model('users', schema);

module.exports = model;