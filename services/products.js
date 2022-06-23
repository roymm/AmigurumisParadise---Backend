const {getProductByID, getAllProducts, addProduct} = require("../data-access/products");

exports.getProductByID = async (productID) => {
    return await getProductByID(productID);
}

exports.getAllProducts = async () => {
    return await getAllProducts();
}

exports.addProduct = async (newProduct) => {
    return await addProduct(newProduct);
}