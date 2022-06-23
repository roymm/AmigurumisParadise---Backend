const express = require("express");

const { getProductByID, getAllProducts, addProduct } = require("../controllers/products");

const router = express.Router();

router.route("/:id").get(getProductByID);

router.route("/").get(getAllProducts);

router.route("/add").post(addProduct);

module.exports = router;