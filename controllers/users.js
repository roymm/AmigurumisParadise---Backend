const bcrypt = require("bcrypt");
const { createUser } = require("../data-access/users");

exports.registerUser = async (req, res) => {
  createUser(req, res);
};
