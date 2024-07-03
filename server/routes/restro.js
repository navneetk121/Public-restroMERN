const express = require("express");
const router = express.Router();

const foodController = require('../controller/foodController');
const beverageController = require('../controller/beverageController');
const dessertController = require('../controller/dessertController');

// Food routes
router.get('/food', foodController.getAllFood);
router.post('/food', foodController.createFood);

// Beverage routes
router.get('/beverages', beverageController.getAllBeverages);
router.post('/beverages', beverageController.createBeverage);

// Dessert routes
router.get('/desserts', dessertController.getAllDesserts);
router.post('/desserts', dessertController.createDessert);

module.exports = router;
