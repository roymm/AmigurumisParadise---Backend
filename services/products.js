const {getProductByID, getAllProducts} = require("../data-access/products");

exports.getProductByID = async (productID) => {
    return await getProductByID(productID);
}

exports.getAllProducts = async () => {
    return await getAllProducts();
}