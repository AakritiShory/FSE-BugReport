const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');

// Route to submit a new bug
router.post('/', bugController.createBug);

// Route to get all bugs
router.get('/', bugController.getAllBugs);

module.exports = router;
