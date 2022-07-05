const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  picture: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  num_available: {
    type: Number,
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);