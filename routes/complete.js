const express=require('express');
const ComRoute=express.Router();
const Completed=require('../controllers/complete');
const authenticateJWT=require("../authentication/jwtAuth");

ComRoute.get('/', authenticateJWT, Completed.getCompleted);
ComRoute.post('/', authenticateJWT,Completed.addCompleted);
ComRoute.put('/:id', authenticateJWT, Completed.updateCompleted);
ComRoute.delete('/:id', authenticateJWT, Completed.deleteCompleted);

module.exports=ComRoute;
