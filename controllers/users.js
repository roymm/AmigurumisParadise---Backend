const bcrypt = require("bcrypt");
const { createUser, getUserByID } = require("../data-access/users");
const { error } = require("../responseAPI");
const SALT_ROUNDS = 10;

exports.registerUser = async (req, res) => {
  try {
    const userPayload = req.body;
    userPayload.password = await bcrypt.hash(userPayload.password, SALT_ROUNDS);

    await createUser(req, res);
  } catch (e) {
    res
      .status(500)
      .json(error("Error hashing the user's password", e, res.status));
  }
};

exports.getUserByID = async (req, res) => {
  try {
    await getUserByID(req, res);
  } catch (e) {
    res
      .status(500)
      .json(error("Error getting the user", e, res.status));
  }
};
