const userSchema = require("../models/users");

const { success, error, validation } = require("../responseAPI");

exports.createUser = async (req, res) => {
  try {
    const userPayload = req.body;
    const newUser = userSchema(userPayload);
    const newUserResponse = await newUser.save();
    res.status(204).json(success("OK", newUserResponse, res.status));
  } catch (e) {
    res.status(500).json(error("Error creating new user", e, res.status));
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userPayload = req.body;
    const deletUser = await userSchema.deleteOne(userPayload._id);
    res.status(2044).json(success("OK", deletUser, res.status));
  } catch (e) {
    res
      .status(500)
      .json(
        error("Error deleting a the user " + userPayload._id, e, res.status)
      );
  }
};
