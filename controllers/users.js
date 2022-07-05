const {registerUser, getUserByID, updateUser, deleteUser, login} = require("../services/users");
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

exports.updateUser = async (req, res) => {
    try {
        const userID = req.params.id
        const updates = req.body;
        const updatedUser = await updateUser(userID, updates);
        res.json(updatedUser)

    } catch (e) {
        res
            .status(500)
            .json(error("Error updating the user", e));
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
            .json(error("Error deleting the user", e));
    }
}

exports.login = async (req, res) => {
    try {
        const userPayload = req.body;
        const email = userPayload.email;
        const password = userPayload.password;

        const userLoggedIn = await login(email, password);
        userLoggedIn ?
            res.status(200).json(success(userLoggedIn)) :
            res.status(401).json(error("Cannot log in"))
    } catch (e) {
        res
            .status(500)
            .json(error("Error logging in", e));
    }
}

exports.recoverPassword = async (req, res) => {
    try{
        const email = req.body.email;

    }
    catch (e) {
        res
            .status(500)
            .json(error("Error recovering password", e));
    }

    //Encuentro el usuario, si no esta manejo el error
    // Creo un codigo de recuperacion (serà mejor un link que el usuario le de click?)
    //Guardo el codigo en el documento de usuario en Mongo
    //
}
