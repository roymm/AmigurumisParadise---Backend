const express = require("express");

const { registerUser, registerUserGet } = require("../controllers/users");

const router = express.Router();

router.route("/registerGet").get(registerUserGet);
router.route("/register").post(registerUser);

module.exports = router;