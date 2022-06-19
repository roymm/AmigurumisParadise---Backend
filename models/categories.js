const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    required: true,
  },

  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]

}, {timestamps: true});

module.exports = mongoose.model("Category", categorySchema);