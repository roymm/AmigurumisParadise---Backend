const express = require("express");
const dotenv = require("dotenv");
const { mongoose } = require("mongoose");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");

dotenv.config();

const SALT_ROUNDS = 10;
const DEFAULT_PORT = process.env.PORT || 8500;
const server = express();
server.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(process.env.MONGODB_URI);

//Mount routes
server.get("/", (req, res) => {
  res.send("Welcome nodemon");
});

server.use("/api/users", usersRoutes);
server.use("/api/products", productsRoutes);

server.listen(process.env.PORT || DEFAULT_PORT);
console.log(`The server is running at http://localhost:${DEFAULT_PORT}`);
