// models/order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    fullName: String,
    mobileNumber: String,
    alternateMobileNumber: String,
    email: String,
    address: String,
    state: String,
    district: String,
    pinCode: String,
    acceptTerms: Boolean,
  },
  cart: [
    {
      name: String,
      quantity: Number,
      totalPrice: Number,
    }
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
