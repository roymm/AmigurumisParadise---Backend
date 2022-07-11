const express = require("express");

const { registerUser, getUserByID, updateUser, deleteUser, login, recoverPassword, verifyToken} = require("../controllers/users");
const {userIsAuthenticated} = require("../middlewares/auth");

const router = express.Router();

router.route("/:id").get(getUserByID);

router.route("/register").post(registerUser);

router.route("/:id").patch([userIsAuthenticated], updateUser);

router.route("/:id").delete(deleteUser);

router.route("/login").post(login);

router.route("/recover-password").post(recoverPassword);

router.route("/reset-password").post(verifyToken);

module.exports = router;
