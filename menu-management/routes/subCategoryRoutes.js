const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController');

// Create a sub-category
router.post('/', subCategoryController.createSubCategory);

// Get all sub-categories
router.get('/', subCategoryController.getAllSubCategories);

// Get sub-category by ID or name
router.get('/:idOrName', subCategoryController.getSubCategoryByIdOrName);

// Edit sub-category
router.put('/:id', subCategoryController.editSubCategory);

module.exports = router;
