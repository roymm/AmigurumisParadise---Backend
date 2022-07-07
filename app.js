const dotenv = require("dotenv");
const {mongoose} = require("mongoose");
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");

const usersRoutes = require("./routes/users");
const productRoutes = require("./routes/products")
const config = require('./utils/config');
const logger = require('./utils/logger');


const app = express();
app.use(express.json());
app.use(cors());
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
app.use("/api/products", productRoutes);

//Documentation setup
const swaggerFile = require("./swagger.json");
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

module.exports = app;