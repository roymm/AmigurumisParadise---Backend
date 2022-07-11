const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const {createUser, getUserByID, getCredentialsByEmail, updateUser, deleteUser} = require("../data-access/users");
const {sendRecoveryCodeEmail} = require("../utils/mailService");
const {createToken, getTokenByUserId} = require("../data-access/token");
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
    const token = await jwt.sign(userInDatabase.id, config.JWT_LOGIN_KEY);
    return {
        ...userInDatabase.toJSON(), token,
    };
}

exports.recoverPassword = async (email) => {
    const user = await getCredentialsByEmail(email);
    if (!user) {
        return null;
    }

    const randomToken = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    const newTokenDoc = await createToken({userId: user._id, token: randomToken});
    return await sendRecoveryCodeEmail(user.email, randomToken);
}

exports.verifyToken = async (email, token, newPassword) => {
    const user = await getCredentialsByEmail(email);
    if (!user) return null;

    const tokenDoc = getTokenByUserId(user._id);
    if (!tokenDoc) return null;

    const encryptedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
    return await updateUser(user._id, {password: encryptedPassword}, {new: true});
}