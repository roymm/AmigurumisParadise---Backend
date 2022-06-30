const express = require("express");

const { addItemToCart, removeItemToCart, getCartItems } = require("../controllers/cart");
const { userIsAuthenticated, userIsInRole } = require("../middlewares/auth")

const router = express.Router();

router.route("/user/cart/add-to-cart").post(userIsAuthenticated, userIsInRole, addItemToCart);
router.route("/user/cart/remove-to-cart").post(userIsAuthenticated, userIsInRole, removeItemToCart);
router.route("/user/cart/get-items").post(userIsAuthenticated, userIsInRole, getCartItems);

module.exports = router;