const express = require("express");

const { getCategoryByIdWithProducts } = require("../controllers/categories");

const router = express.Router();

router.route("/:id").get(getCategoryByIdWithProducts);

module.exports = router;