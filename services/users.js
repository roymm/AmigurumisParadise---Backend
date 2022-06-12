const bcrypt = require("bcrypt");
const {createUser, getUserByID} = require("../data-access/users");
const SALT_ROUNDS = 10;

exports.registerUser = async (newUser) => {
    newUser.password = await bcrypt.hash(newUser.password, SALT_ROUNDS);
    const userInDatabase = await createUser(newUser);
    return await getUserByID(userInDatabase.id);
}

exports.getUserByID = async (userID) => {
    return await getUserByID(userID);
}