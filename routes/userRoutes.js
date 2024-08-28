const express = require("express");
const CreateUserRoute = express.Router();
const { logIn, showUser, findUser, signIn } = require("../controllers/user");

CreateUserRoute.post("/signIn/", signIn);
CreateUserRoute.get("/users", showUser);
CreateUserRoute.get("/user/:email", findUser);
CreateUserRoute.post("/logIn/:id/:email/:paramPass", logIn);

module.exports = CreateUserRoute;
