const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  zipCode: { type: String },
  country: { type: String },
  role: { type: String, default: 'user' },  // 'admin' or 'user'
});

module.exports = mongoose.model('User', userSchema);
