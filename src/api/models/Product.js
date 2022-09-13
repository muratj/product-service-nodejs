const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  sku: {
    type: Number,
    required: [true, 'Please add product sku']
  },
  brand: {
    type: String,
    required: [true, 'Please add product brand']
  },
  model: {
    type: String,
    required: [true, 'Please add product model']
  },
  category: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);