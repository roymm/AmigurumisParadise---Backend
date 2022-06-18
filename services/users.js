const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {createUser, getUserByID, getCredentialsByEmail, updateUser, deleteUser} = require("../data-access/users");
const SALT_ROUNDS = 10;

exports.registerUser = async (newUser) => {
    newUser.password = await bcrypt.hash(newUser.password, SALT_ROUNDS);
    const userInDatabase = await createUser(newUser);
    return await getUserByID(userInDatabase.id);
}

exports.getUserByID = async (userID) => {
    return await getUserByID(userID);
}

exports.updateUser = async (userID, updates) => {
    const options = {new: true};
    return await updateUser(userID, updates, options);
}

exports.deleteUser = async (userID) => {
    return await deleteUser(userID);

    /*TODO: Aqui hay que verificar que pasa con las otras entidades de la base cuando un usuario se elimina */
}

exports.login = async (email, password) => {
    const userInDatabase = await getCredentialsByEmail(email);

    //Checks if the password on the request is the same as the encrypted password on the database
    if (!userInDatabase || !(await bcrypt.compare(password, userInDatabase.password))) {
        return null;
    }
    const token = await jwt.sign(userInDatabase.id, process.env.JWT_KEY);
    return {
        ...userInDatabase.toJSON(),
        token,
    };
}