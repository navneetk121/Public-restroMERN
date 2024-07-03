const Food = require('../models/Food');

// Get all food items
exports.getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new food item
exports.createFood = async (req, res) => {
  const { name, cost, veg, categoryCode } = req.body;
  const newFood = new Food({ name, cost, veg, categoryCode });

  try {
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (err) {
    res.status(400).send(err);
  }
};
