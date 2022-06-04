const bcrypt = require("bcrypt");
const { createUser } = require("../data-access/users");
const {error} = require("../responseAPI");
const SALT_ROUNDS = 10;

exports.registerUser = async (req, res) => {
  try{
    const userPayload = req.body;
    userPayload.password = await bcrypt.hash(userPayload.password, SALT_ROUNDS);

    await createUser(req, res);
  }
  catch (e) {
    res
        .status(500)
        .json(
            error("Error hashing the user's password", e, res.status)
        );
  }
};
