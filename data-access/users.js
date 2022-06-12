const userSchema = require("../models/users");

exports.createUser = async (newUser) => {
    const newUserDoc = new userSchema(newUser);
    return await newUserDoc.save();
};

exports.getUserByID = async (userID) => {
    return await userSchema.findById(userID).exec();
};

/*
exports.deleteUser = async (req, res) => {
  try {
    const userPayload = req.body;
    const deletUser = await userSchema.deleteOne(userPayload._id);
    res.status(200).json(success("OK", deletUser, res.status));
  } catch (e) {
    res
      .status(500)
      .json(error("Error deleting the user " + userPayload._id, e, res.status));
  }
};
*/