const {getCategoryByIdWithProducts} = require("../data-access/categories");
const {error, success} = require("../utils/responseAPI");

exports.getCategoryByIdWithProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await getCategoryByIdWithProducts(id);
        category ?
            res.status(200).json(success("Ok", category)) :
            res.status(404).json(error("Category not found", {}));

    } catch (e) {
        res
            .status(500)
            .json(error("Error getting the category", e));
    }
};