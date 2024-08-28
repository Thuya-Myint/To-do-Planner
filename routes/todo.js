const express = require("express");
const ToDoRoute = express.Router();
const todo = require("../controllers/todo");
const authenticateJWT = require("../authentication/jwtAuth");

ToDoRoute.post("/", authenticateJWT, todo.addToDo);
ToDoRoute.get("/", authenticateJWT, todo.getAllToDo);
ToDoRoute.put("/:id", authenticateJWT, todo.updateToDo);
ToDoRoute.delete("/:id", authenticateJWT, todo.deleteToDo);
module.exports = ToDoRoute;
