const productSchema = require("../models/products");
const logger = require("../utils/logger");

exports.getProductByID = async (productID) => {
    return await productSchema.findById(productID).exec();
};

exports.getAllProducts = async () => {
    logger.info("Holi");
    return await productSchema.find().exec();
};

exports.addProduct = async (newProduct) => {
    const newProductDoc = new productSchema(newProduct);
    logger.info(newProductDoc);
    return await newProductDoc.save();
}