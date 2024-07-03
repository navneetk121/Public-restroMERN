const mongoose = require('mongoose');

const dessertSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  veg: Boolean,
  categoryCode: {
    type: String,
    enum: ['a', 'b', 'c'],
    required: true,
  },
});

const Dessert = mongoose.model('Dessert', dessertSchema);

module.exports = Dessert;
