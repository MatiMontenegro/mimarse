const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: [String], // Array to hold image URLs
  video: { type: String },  // URL for product video
  discount: { type: Number, default: 0 },  // Discount in percentage
  stock: { type: Number, required: true },  // Number of available items
});

module.exports = mongoose.model('Product', productSchema);
