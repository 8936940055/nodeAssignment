const mongoose = require("mongoose");

const Products = mongoose.model("Product", {
  name: String,
  description: String,
  price: Number,
});

module.exports = Products;