const {addItemToCart, removeItemToCart} = require("../data-access/cart");

exports.addItemToCart = async (userID, items) => {
    return await addItemToCart(userID, items);
}

exports.removeItemToCart = async (userID, items, productId) => {
    return await removeItemToCart(userID, items, productId);
}

exports.getCartItems = async (userID, items) => {
    return await getCartItems(userID, items);
}