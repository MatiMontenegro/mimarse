const express = require('express');
const Product = require('../models/Product');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// Create Product
router.post('/', upload.array('images', 10), (req, res) => {
  const { title, category, price, description, stock } = req.body;
  const product = new Product({
    title,
    category,
    price,
    description,
    images: req.files.map(file => file.path),  // Store the file paths of uploaded images
    video: req.body.video,
    stock,
  });
  
  product.save()
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
});

// Get All Products
router.get('/', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
