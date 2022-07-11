const cartSchema = require("../models/cart");

exports.createCart = async (newCart) => {

    const newCartDoc = new cartSchema(newCart);
    return await newCartDoc.save();
};

exports.updateUserCart = async (userId, cartItems) => {
    return await cartSchema.findOneAndUpdate({userId: userId},{cartItems: cartItems}).exec();
}
exports.getCartItems = async (userID) => {
    return await cartSchema.findOne({userID: userID}).exec();
}
/*
exports.getCartItems = async (userID, items) => {
    return cartSchema.findOne(userID).populate("cartItems.product", "_id name price picture").exec((cart) => {
        if (cart) {
            let cartItems = {};
            items.forEach((item, index) => {
                cartItems[item.product._id.toString()] = {
                    _id: item.product._id.toString(),
                    name: item.product.name,
                    img: item.product.picture,
                    price: item.product.price,
                    quantity: item.quantity,
                };
            });
        }
    });
}*/


