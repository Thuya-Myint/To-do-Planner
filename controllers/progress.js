const proModel = require('../model/progress');

const addProgress = async (req, res) => {
    try {
        const data = req.body;
        const dataSet = await proModel.addProgress(data);
        res.status(201).json({ dataSet });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getAllProgress=async(req,res)=>{
    try{
        const dataSet=await proModel.getAllProgress();
        res.status(200).json({dataSet});
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
const updateProgress=async(req,res)=>{
    try {
        const {id}=req.params;
        const newData=req.body;
        const toObj=Object.assign({}, newData);
        const dataSet=await proModel.updateProgress(id, toObj);
        res.status(200).json({message : "successfully updated"});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
const deleteProgress=async(req,res)=>{
    try {
        const {id}=req.params;
        const dataSet=await proModel.deleteProgress(id);
        res.status(200).json({message : "successfully deleted"});
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
module.exports={addProgress, getAllProgress, updateProgress, deleteProgress};
