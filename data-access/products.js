const productSchema = require("../models/products");

exports.getProductByID = async (productID) => {
    return await productSchema.findById(productID).exec();
};

exports.getAllProducts = async () => {
    return await productSchema.find().exec();
};