const {updateUserCart, getCartItems} = require("../services/cart");
const {error, success} = require("../utils/responseAPI");

exports.updateUserCart = async (req, res) => {
    try {
        const userID = req.body.userId;
        const items = req.body.cartItems;

        const cart = await updateUserCart(userID, items);
        cart ?
            res.status(200).json(success("Ok", cart)) :
            res.status(404).json(error("Item not added", {}));

    } catch (e) {
        console.log(e);
        res
            .status(500)
            .json(error("Error adding the item", e));
    }
};

exports.getCartItems = async (req, res) => {
    try {
        const userID = req.params.userId;
        const cartItems = await getCartItems(userID);
        cartItems ?
                res.status(200).json(success("Ok", cartItems)) :
                res.status(404).json(error("Item not found", {}));

    } catch (e) {
        res
        .status(500)
        .json(error("Error getting the item", e));
    }
}