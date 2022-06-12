const dotenv = require("dotenv");
const { mongoose } = require("mongoose");
const express = require("express");
const usersRoutes = require("./routes/users");
const config = require('./utils/config')

const app = express();
app.use(express.json());
dotenv.config();

const MONGODB_URI = config.MONGODB_URI;
mongoose.connect(MONGODB_URI);

//Mount routes
app.use("/api/users", usersRoutes);

module.exports = app;