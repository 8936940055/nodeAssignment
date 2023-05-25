const Products = require("../models/product.model");

const getProducts = async (req, res) => {
    try {
        console.log("req :: ", req.body)
        const products = await Products.find({}, {});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createProduct = async (req, res) => {
    try {
        console.log("create product :: ",req.body)
        const product = await Products.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};

const geteProductByID = async (req, res) => {
    try {
        const product = await Products.find({ _id: req.params.pid });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Products.updateOne({ _id: req.params.pid }, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteProductById = async (req, res) => {
    try {
        const product = await products.deleteOne({ _id: req.params.pid });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};
module.exports = { getProducts, createProduct, geteProductByID, updateProduct, deleteProductById };