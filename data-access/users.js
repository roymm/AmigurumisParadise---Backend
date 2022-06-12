const userSchema = require("../models/users");

exports.createUser = async (newUser) => {
    const newUserDoc = new userSchema(newUser);
    return await newUserDoc.save();
};

exports.getUserByID = async (userID) => {
    return await userSchema.findById(userID).exec();
};

exports.updateUser = async (userID, updates, options) => {
    return await userSchema.findByIdAndUpdate(userID, updates, options).exec();
};

exports.deleteUser = async (userID) => {
    return await userSchema.findByIdAndDelete(userID).exec();
}