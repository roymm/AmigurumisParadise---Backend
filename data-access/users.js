const userSchema = require("../models/users");

exports.createUser = async (req, res) => {
  try {
    const user = userSchema(req.body);
    const data = await user.save();
    res.json(data);
  } catch(error) {
    res.status(500).json({
      message: "Error saving the new user",
      error: error
    });
  }
};
