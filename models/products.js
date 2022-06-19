const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
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