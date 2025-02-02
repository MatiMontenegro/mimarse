const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  discountApplied: { type: Boolean, default: false },
  totalPrice: { type: Number, required: true },  // After discount
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sale', saleSchema);
