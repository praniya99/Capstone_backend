const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../models/product');

const router = express.Router();

// Set up storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Endpoint to handle product addition
router.post('/add-product', upload.single('productImage'), async (req, res) => {
  try {
    const { productName, productPrice, selectedCategory, additionalDetails, productQuantity } = req.body;
    const productImage = req.file;

    if (!productName || !productPrice || !selectedCategory || !productImage ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new product
    const product = new Product({
      productName,
      productPrice,
      selectedCategory,
      additionalDetails,
      productQuantity,
      productImage: productImage.filename,
    });

    // Save the product to the database
    await product.save();

    // Respond with success message
    res.status(200).json({ message: 'Product added successfully!' });
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});
// Endpoint to get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Route to update an existing product
router.put('/products/:id', upload.single('productImage'), async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, productPrice, selectedCategory, additionalDetails, productQuantity } = req.body;
    const productImage = req.file ? req.file.filename : null;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        productName,
        productPrice,
        selectedCategory,
        additionalDetails,
        productQuantity,
       
        ...(productImage && { productImage }), // Only update the productImage if a new file is uploaded
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product' });
  }
});


// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});



module.exports = router;






