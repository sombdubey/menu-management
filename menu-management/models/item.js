const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: false },
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicability: { type: Boolean, required: true },
  tax: { type: Number, required: false },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, required: true },
  totalAmount: { type: Number, required: true }
});

module.exports = mongoose.model('Item', ItemSchema);
