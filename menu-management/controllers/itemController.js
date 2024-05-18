const Item = require('../models/item');

// Create a new item
exports.createItem = async (req, res) => {
  try {
    const { category, subCategory, name, image, description, taxApplicability, tax, baseAmount, discount } = req.body;
    const totalAmount = baseAmount - discount;
    const newItem = new Item({ category, subCategory, name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount });
    await newItem.save();
    res.status(201).send(`Item ${name} sucessfully added!`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find().populate('category subCategory');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get item by ID or name
exports.getItemByIdOrName = async (req, res) => {
  try {
    const { idOrName } = req.params;
    const item = idOrName.match(/^[0-9a-fA-F]{24}$/) ? 
      await Item.findById(idOrName).populate('category subCategory') : 
      await Item.findOne({ name: idOrName }).populate('category subCategory');
    
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit item
exports.editItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true }).populate('category subCategory');
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search items by name
exports.searchItemsByName = async (req, res) => {
  try {
    const { name } = req.query;
    const items = await Item.find({ name: new RegExp(name, 'i') }).populate('category subCategory');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
