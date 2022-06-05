const bcrypt = require("bcrypt");
const {createUser, getUserByID} = require("../data-access/users");
const {error, success} = require("../utils/responseAPI");
const SALT_ROUNDS = 10;

exports.registerUser = async (req, res) => {
    try {
        const userPayload = req.body;
        userPayload.password = await bcrypt.hash(userPayload.password, SALT_ROUNDS);
        const newUser = await createUser(userPayload);
        res.status(201).json(success("Created", newUser));
    } catch (e) {
        res
            .status(500)
            .json(error("Error creating a new user", e));
    }
};

exports.getUserByID = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getUserByID(id);
        user ?
            res.status(200).json(success("Ok", user)) :
            res.status(404).json(error("User not found", {}));

    } catch (e) {
        res
            .status(500)
            .json(error("Error getting the user", e));
    }
};
