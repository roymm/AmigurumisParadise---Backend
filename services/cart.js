const {addItemToCart, getCartItems, createCart} = require("../data-access/cart");
const {getProductByID} = require("../data-access/products");
const {getUserByID} = require("../data-access/users");

exports.updateUserCart = async (userID, items) => {
    const currentCart = await getCartItems(userID);
    if (!currentCart) {
        const user = await getUserByID(userID);

        let cartItems=[];
        for (const item of items) {
            const product = await getProductByID(item.productId);
            cartItems.push({productId: product._id, quantity: item.quantity})
        }
        const newCart = {userId: user._id, cartItems: cartItems};
        console.log(newCart);
        return createCart(newCart);
    }
    return await addItemToCart(userID, items);
}

exports.getCartItems = async (userID, items) => {
    return await this.getCartItems(userID, items);
}