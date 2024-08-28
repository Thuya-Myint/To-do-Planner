const ComModel=require("../model/complete");

const addCompleted=async(req,res)=>{
    try {
        const dataSet=await ComModel.addCompleted(req.body);
        res.status(201).json({dataSet});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
const getCompleted=async(req,res)=>{
    try {
        const dataSet=await ComModel.getCompleted();
        res.status(201).json({dataSet});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
const updateCompleted=async(req,res)=>{
    try {
        const {id}=req.params;
        const toObj=Object.assign({}, req.body)
        await ComModel.updateCompleted(id, toObj);
        res.status(200).json({message : " Successfully Updated"});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
const deleteCompleted=async(req,res)=>{
    try {
        const {id}=req.params;
        await ComModel.deleteCompleted(id);
        res.status(200).json({message : " Successfully deleted!"});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
module.exports={addCompleted, getCompleted, updateCompleted, deleteCompleted};
