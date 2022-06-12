const bcrypt = require("bcrypt");
const {createUser, getUserByID, updateUser, deleteUser} = require("../data-access/users");
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
    return await updateUser(userID, updates,options);
}

exports.deleteUser = async (userID) => {
    return await deleteUser(userID);

    /*TODO: Aqui hay que verificar que pasa con las otras entidades de la base cuando un usuario se elimina*/
}