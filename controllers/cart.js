const {addItemToCart, removeItemToCart, getCartItems} = require("../data-access/cart");
const {error, success} = require("../utils/responseAPI");

exports.addItemToCart = async (req, res) => {
    try {
        const userID = req.user._id;
        const items = req.body.cartItems;

        const cart = await addItemToCart(userID, items);
        cart ?
            res.status(200).json(success("Ok", cart)) :
            res.status(404).json(error("Item not added", {}));

    } catch (e) {
        res
            .status(500)
            .json(error("Error adding the item", e));
    }
};

exports.removeItemToCart = async (req, res) => {
    try {
        const userID = req.user._id;
        const {productId} = req.body.payload;
        if (productId){
            const removedItem = await removeItemToCart(userID, productId);
            removedItem ?
                res.status(200).json(success("Ok", removedItem)) :
                res.status(404).json(error("Item not removed", {}));

        }
    } catch (e) {
        res
        .status(500)
        .json(error("Error removing the item", e));

    }

};

exports.getCartItems = async (req, res) => {
    try {
        const userID = req.user._id;
        const items = req.body.cartItems;
        const cartItems = await getCartItems(userID, items);
        cartItems ?
                res.status(200).json(success("Ok", cartItems)) :
                res.status(404).json(error("Item not found", {}));
        

    } catch (e) {
        res
        .status(500)
        .json(error("Error getting the item", e));

    }
}