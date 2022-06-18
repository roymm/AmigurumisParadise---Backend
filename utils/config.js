const dotenv = require("dotenv");
dotenv.config();

const DEFAULT_PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_LOGIN_KEY = process.env.JWT_LOGIN_KEY;
const JWT_RECOVER_KEY = process.env.JWT_RECOVER_KEY;

module.exports = {
    DEFAULT_PORT,
    MONGODB_URI,
    JWT_LOGIN_KEY,
    JWT_RECOVER_KEY
};