const tokenSchema = require("../models/token");

exports.createToken = async (newToken) => {
    const previousToken = await tokenSchema.findOneAndDelete({UserId: newToken.userId}).exec();
    const newTokenDoc = new tokenSchema(newToken);
    return await newTokenDoc.save();
}

exports.getTokenByUserId = async (userId) => {
    return await tokenSchema.findOne({UserId: userId}, ['token']).exec();
}