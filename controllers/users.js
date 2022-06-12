const {registerUser, getUserByID} = require("../services/users");
const {error, success} = require("../utils/responseAPI");

exports.registerUser = async (req, res) => {
    try {
        const userPayload = req.body;
        const newUser = await registerUser(userPayload);
        res.status(201).json(success("Created", newUser));
    } catch (e) {
        res
            .status(500)
            .json(error("Error creating a new user", e));
    }
};

exports.getUserByID = async (req, res) => {
    try {
        const userID = req.params.id;
        const user = await getUserByID(userID);
        user ?
            res.status(200).json(success("Ok", user)) :
            res.status(404).json(error("User not found", {}));

    } catch (e) {
        res
            .status(500)
            .json(error("Error getting the user", e));
    }
};
