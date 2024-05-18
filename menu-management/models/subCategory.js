const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicability: { type: Boolean, default: null },
  tax: { type: Number, default: null }
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);
