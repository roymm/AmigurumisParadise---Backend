const express = require("express");

const { addItemToCart, removeItemToCart, getCartItems } = require("../controllers/cart");
const { userIsAuthenticated, userIsInRole } = require("../middlewares/auth")

const router = express.Router();

router.route("/add-to-cart").post(userIsAuthenticated, userIsInRole, addItemToCart);
router.route("/remove-to-cart").post(userIsAuthenticated, userIsInRole, removeItemToCart);
router.route("/get-items").get(userIsAuthenticated, userIsInRole, getCartItems);

module.exports = router;