const express = require("express");

const { registerUser, getUserByID, updateUser, deleteUser } = require("../controllers/users");

const router = express.Router();

router.route("/:id").get(getUserByID);

router.route("/register").post(registerUser);

router.route("/:id").patch(updateUser);

router.route("/:id").delete(deleteUser)

module.exports = router;
