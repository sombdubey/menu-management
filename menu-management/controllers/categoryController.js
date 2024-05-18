const Category = require('../models/category');

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name, image, description, taxApplicability, tax, taxType } = req.body;
    const newCategory = new Category({ name, image, description, taxApplicability, tax, taxType });
    await newCategory.save();
    res.status(201).send(`Category ${name} sucessfully Created!`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get category by ID or name
exports.getCategoryByIdOrName = async (req, res) => {
  try {
    const { id, name } = req.params;
    const category = id ? await Category.findById(id) : await Category.findOne({ name });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit category
exports.editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
