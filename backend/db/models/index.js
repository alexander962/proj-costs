const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskScheme = new Schema({
  shopName: String,
  shopDate: Date,
  shopPrice: Number
});

module.exports = Cost = mongoose.model('costs', taskScheme);