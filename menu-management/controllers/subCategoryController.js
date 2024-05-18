const SubCategory = require('../models/subCategory');

// Create a new sub-category
exports.createSubCategory = async (req, res) => {
  try {
    const { category, name, image, description, taxApplicability, tax } = req.body;
    const newSubCategory = new SubCategory({ category, name, image, description, taxApplicability, tax });
    await newSubCategory.save();
    res.status(201).send(`Sub-category ${name} sucessfully Created!`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all sub-categories
exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('category');
    res.status(200).json(subCategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get sub-category by ID or name
exports.getSubCategoryByIdOrName = async (req, res) => {
  try {
    const { id, name } = req.params;
    const subCategory = id ? await SubCategory.findById(id) : await SubCategory.findOne({ name }).populate('category');
    if (!subCategory) {
      return res.status(404).json({ message: 'SubCategory not found' });
    }
    res.status(200).json(subCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit sub-category
exports.editSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSubCategory) {
      return res.status(404).json({ message: 'SubCategory not found' });
    }
    res.status(200).json(updatedSubCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
