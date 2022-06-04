const bcrypt = require("bcrypt");
const { createUser } = require("../data-access/users");
const SALT_ROUNDS = 10;

exports.registerUser = async (req, res) => {
  const userPayload = req.body;
  const encryptedPassword = await bcrypt.hash(userPayload.password, SALT_ROUNDS);
  userPayload.password = encryptedPassword;

  createUser(req, res);
};
