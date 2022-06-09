const bcrypt = require("bcrypt");
const {createUser, getUserByID, updateUser, deleteUser} = require("../data-access/users");
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

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const updates = req.body;
        const options = {new: true};
        const updatedUser = await updateUser(id, updates, options);
        res.json(updatedUser)
        
    } catch (e) {
        res
            .status(500)
            .json(error("Error to update the user", e));
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await deleteUser(id);
        deletedUser ?
            res.status(204).json(success(deleteUser)) :
            res.status(404).json(error("User not found", {}));
        
    } catch (e) {
        res
            .status(500)
            .json(error("Error to delete the user", e));
    }
}
