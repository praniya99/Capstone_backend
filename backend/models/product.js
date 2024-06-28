const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  selectedCategory: {
    type: String,
    required: true,
  },
  additionalDetails: {
    type: String,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  
  productImage: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
