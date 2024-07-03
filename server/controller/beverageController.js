const Beverage = require('../models/Beverage');

// Get all beverage items
exports.getAllBeverages = async (req, res) => {
  try {
    const beverages = await Beverage.find();
    res.json(beverages);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new beverage item
exports.createBeverage = async (req, res) => {
  const { name, cost, veg, categoryCode } = req.body;
  const newBeverage = new Beverage({ name, cost, veg, categoryCode });

  try {
    const savedBeverage = await newBeverage.save();
    res.status(201).json(savedBeverage);
  } catch (err) {
    res.status(400).send(err);
  }
};
