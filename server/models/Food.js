const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  veg: Boolean,
  categoryCode: {
    type: String,
    enum: ['a', 'b', 'c', 'd', 'e', 'f'],
    required: true,
  },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
