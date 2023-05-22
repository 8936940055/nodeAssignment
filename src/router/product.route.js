const express = require("express");
const { getProducts, createProduct, geteProductByID, updateProduct, deleteProductById } = require("../controller/product.controller");

router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:pid", geteProductByID);

router.patch("/:pid", updateProduct);

router.delete("/:pid", deleteProductById);

module.exports = router;