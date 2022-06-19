const categorySchema = require("../models/categories");

exports.getCategoryByIdWithProducts = async (categoryID) => {
    return await categorySchema.findById(categoryID).populate("products").exec();
};