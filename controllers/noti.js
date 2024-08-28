const notiModel=require('../model/noti');

const addNoti=async(req,res)=>{
    try{
        const data=req.body;
        const dataSet=await notiModel.addNoti(data);
        res.status(201).json({dataSet});
    }catch(error){
        res.status(500).json({message : error.message})
    }
};
const getNoti=async(req,res)=>{
    try {
        const data=await notiModel.getAllNoti();
        res.status(201).json({data});
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
const deleteNoti=async(req,res)=>{
try {
    await notiModel.deleteNoti(req.params.id);
    res.status(201).json({message : "Successfully deleted!"})
} catch (error) {
    res.status(500).json({message : "Deleting failed!"});
}
}
const deleteAllNoti=async(req,res)=>{
    try {
        await notiModel.deleteAllNoti();
        res.status(201).json({message : "Successfully deleted!"})
    } catch (error) {
        res.status(500).json({message : "Fail to delete"});
    }
}
module.exports={addNoti, getNoti, deleteNoti, deleteAllNoti};
