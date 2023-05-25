const mongoose = require("mongoose");
const Products = mongoose.model("Products", {
  name: String,
  description: String,
  price: Number,
});

module.exports = Products;