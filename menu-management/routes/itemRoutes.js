const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Create an item
router.post('/', itemController.createItem);

// Get all items
router.get('/', itemController.getAllItems);

// Get item by ID or name
router.get('/:idOrName', itemController.getItemByIdOrName);

// Edit item
router.put('/:id', itemController.editItem);

// Search items by name
router.get('/search', itemController.searchItemsByName);

module.exports = router;
