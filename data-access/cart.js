const cartSchema = require("../models/cart")

exports.addItemToCart = async (userID, items) => {
    return await cartSchema.findOne(userID).exec((cart) => {
        if(cart){

            items.forEach((cartItem) => {
                const product = cartItem.product;
                const item = cart.items.find((c) => c.product == product);
                let condition, update;
                if(item){
                    condition = {userID, "items.product": product};
                    update = {
                        $set: {"items.$": cartItem},
                    };

                } else {
                    condition = {userID};
                    update = {
                        $push: {items: cartItem},
                    };
                }

            })
        } else {
            const cart = new cartSchema(userID, items);
            cart.save();
        }
  
    });
};

exports.removeItemToCart = async (userID, productId) => {
    return await cartSchema.updateOne(userID, {
        $pull: { items: {product: productId,}}
    }).exec();
};

exports.getCartItems = async (userID, items) => {
    return await cartSchema.findOne(userID).populate("cartItems.product", "_id name price picture").exec((cart) => {
        if(cart){
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
}


