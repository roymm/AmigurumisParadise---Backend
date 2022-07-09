const tokenSchema = require("../models/token");

exports.createToken = async (newToken) => {
    const newTokenDoc = new tokenSchema(newToken);
    return await newTokenDoc.save();
}