const jwt = require("jsonwebtoken");
const {getUserByID} = require("../services/users");
const {error} = require("../utils/responseAPI");

exports.userIsAuthenticated = async (req, res, next) => {
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization
        if (token) {
            try {
                const decryptedToken = await jwt.verify(token, process.env.JWT_KEY);
                const user = getUserByID(decryptedToken.userId);
                if (!user) {
                    res.status(401).json(error("Cannot log in"));
                } else {
                    req.user = decryptedToken;
                    next();
                }
            } catch (error) {
                res.status(401).json(error("Cannot log in", error));
            }
        } else {
            res.status(401).json(error("Authentication required"));
        }
    } else {
        res.status(401).json(error("Authentication required"));
    }
}

exports.userIsInRole = (authorizedRoles) => {
    return (req, res, next) => {
        const userRoles = req.user.roles;
        const userValidRole = userRoles.find((ur) => {
            return authorizedRoles.find((ar) => ar === ur) !== undefined;
        });
        if (!userValidRole) {
            res.status(401).json({
                error: true,
                message: "El no usuario no tiene los accesos necesarios para esta operación."
            })
        } else {
            next();
        }
    }
}