const express = require("express");

const { getProductByID, getAllProducts } = require("../controllers/products");

const router = express.Router();

router.route("/:id").get(getProductByID);

router.route("/").get(getAllProducts);


module.exports = router;