const express=require("express");
const NotiRoute=express.Router();
const noti=require('../controllers/noti');
const authenticateJWT=require("../authentication/jwtAuth");

NotiRoute.post("/", authenticateJWT,noti.addNoti);
NotiRoute.get("/", authenticateJWT,noti.getNoti);
NotiRoute.delete("/:id", authenticateJWT, noti.deleteNoti);
NotiRoute.delete("/", authenticateJWT, noti.deleteAllNoti);

module.exports=NotiRoute;
