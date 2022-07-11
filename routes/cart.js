const express = require("express");

const { updateUserCart, removeItemToCart, getCartItems } = require("../controllers/cart");
const { userIsAuthenticated, userIsInRole } = require("../middlewares/auth")

const router = express.Router();

router.route("/").post(updateUserCart);
router.route("/:userId").get(getCartItems);

module.exports = router;