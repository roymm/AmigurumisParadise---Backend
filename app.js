const dotenv = require("dotenv");
const {mongoose} = require("mongoose");
const express = require("express");
const usersRoutes = require("./routes/users");
const cartRoutes = require("./routes/cart");
const productsRoutes = require("./routes/products");
const config = require('./utils/config');
const logger = require('./utils/logger');
const cors = require("cors");

const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(config.MONGODB_URI)
    .then(() => logger.info("Connection to MongoDB successful"))
    .catch(error => {
            logger.error(error);
            throw(error);
        }
    );

//Mount routes
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use(cors());

module.exports = app;