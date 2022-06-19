const {getCategoryByIdWithProducts} = require("../data-access/categories");

exports.getCategoryByIdWithProducts = async (categoryID) => {
    return await getProductByIdWithProducts(categoryID);
}

