const productSchema = require("../models/products");
const logger = require("../utils/logger");

exports.getProductByID = async (productID) => {
    return await productSchema.findById(productID).exec();
};

exports.getAllProducts = async () => {
    return await productSchema.find().exec();
};

exports.addProduct = async (newProduct) => {
    //logger.info(newProduct);
    const newProductDoc = new productSchema(newProduct);
    logger.info(newProductDoc);
    return await newProductDoc.save();
}