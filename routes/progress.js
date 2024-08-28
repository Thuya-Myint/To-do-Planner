const express = require("express");
const ProgressRoute = express.Router();
const progress = require("../controllers/progress");
const authenticateJWT = require("../authentication/jwtAuth");

ProgressRoute.post("/", progress.addProgress);
ProgressRoute.get("/", authenticateJWT, progress.getAllProgress);
ProgressRoute.put("/:id", progress.updateProgress);
ProgressRoute.delete("/:id", authenticateJWT, progress.deleteProgress);

module.exports = ProgressRoute;
