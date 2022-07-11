const express = require("express");

const { registerUser, getUserByID, updateUser, deleteUser, login, recoverPassword, verifyToken} = require("../controllers/users");
const {userIsAuthenticated} = require("../middlewares/auth");
const {validateSchema} = require("../middlewares/validation");
const {createUserSchema, verifyTokenSchema, recoverPasswordSchema} = require("../validators/users");

const router = express.Router();

router.route("/:id").get(getUserByID);

router.route("/register").post([validateSchema(createUserSchema)],registerUser);

router.route("/:id").patch([userIsAuthenticated], updateUser);

router.route("/:id").delete(deleteUser);

router.route("/login").post(login);

router.route("/recover-password").post([validateSchema(recoverPasswordSchema)],recoverPassword);

router.route("/recover-password/verify-token").post([validateSchema(verifyTokenSchema)],verifyToken);

module.exports = router;
