const mongoose = require('mongoose');

const beverageSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  veg: Boolean,
  categoryCode: {
    type: String,
    enum: ['a', 'b', 'c', 'd'],
    required: true,
  },
});

const Beverage = mongoose.model('Beverage', beverageSchema);

module.exports = Beverage;
