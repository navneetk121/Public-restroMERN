const Dessert = require('../models/Dessert');

// Get all dessert items
exports.getAllDesserts = async (req, res) => {
  try {
    const desserts = await Dessert.find();
    res.json(desserts);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new dessert item
exports.createDessert = async (req, res) => {
  const { name, cost, veg, categoryCode } = req.body;
  const newDessert = new Dessert({ name, cost, veg, categoryCode });

  try {
    const savedDessert = await newDessert.save();
    res.status(201).json(savedDessert);
  } catch (err) {
    res.status(400).send(err);
  }
};
