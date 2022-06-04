const express = require("express");

const { registerUser, getUserByID } = require("../controllers/users");

const router = express.Router();

router.route("/:id").get(getUserByID);

router.route("/register").post(registerUser);

module.exports = router;
