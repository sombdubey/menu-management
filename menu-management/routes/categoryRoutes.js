const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Create a category
router.post('/', categoryController.createCategory);

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get category by ID or name
router.get('/:idOrName', categoryController.getCategoryByIdOrName);

// Edit category
router.put('/:id', categoryController.editCategory);

module.exports = router;
