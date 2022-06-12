const dotenv = require("dotenv");
dotenv.config();

const DEFAULT_PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
    DEFAULT_PORT,
    MONGODB_URI
};