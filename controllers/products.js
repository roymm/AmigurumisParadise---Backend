const {getProductByID, getAllProducts, addProduct} = require("../data-access/products");
const {error, success} = require("../utils/responseAPI");
const logger = require("../utils/logger");

exports.getProductByID = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await getProductByID(id);
        product ?
            res.status(200).json(success("Ok", product)) :
            res.status(404).json(error("Product not found", {}));

    } catch (e) {
        res
            .status(500)
            .json(error("Error getting the product", e));
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        products ?
            res.status(200).json(success("Ok", products)) :
            res.status(404).json(error("Products not found", {}));
    } catch (e) {
        res
            .status(500)
            .json(error("Error getting the products list", e));
    }
}

exports.addProduct = async (req, res) => {
    try{
        const userPayload = req.body;
        //logger.info(userPayload);
        const newProduct = await addProduct(userPayload);
        res.status(200).json(success("Ok",newProduct));
    }
    catch (e){
        logger.error(e);
        res
            .status(500)
            .json(error("Error saving product",e));

    }
}