const express = require("express");
const usersRoutes = require("./routes/users");
const dotenv = require("dotenv");
dotenv.config();

const SALT_ROUNDS = 10;
const DEFAULT_PORT = 8500;
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome nodemon");
});

//Mount routes
server.use("/users", usersRoutes);

server.listen(process.env.PORT || DEFAULT_PORT);
console.log(
  `The server is running at http://localhost:${process.env.PORT || DEFAULT_PORT}`
);