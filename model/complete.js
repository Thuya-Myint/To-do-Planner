const db = require('../configs/firebase');
const ref = db.ref("completed");

const addCompleted = async (data) => {
    try {
        const newRef = ref.push();
        const id = newRef.key;
        const dataWithId = { ...data, id };
        await newRef.set(dataWithId);
        return dataWithId;
    } catch (error) {
        console.log(error);
    }
}
const getCompleted=async()=>{
    try {
        const snapshot=await ref.once("value");
        const completed=snapshot.val();
        return completed;
    } catch (error) {
        console.log(error);
    }
}
const updateCompleted=async(id, newData)=>{
    try {
        const comRef=ref.child(id);
        const newDataWithId={...newData, id};
        await comRef.set(newDataWithId);
    } catch (error) {
        console.log(error);
    }
}
const deleteCompleted=async(id)=>{
    try {
        const delRef=ref.child(id);
        const snapshot=await ref.once('value');
        const dataCount=snapshot.exists()?snapshot.numChildren():0;
        if(dataCount===1) await ref.set({placeholder : ""})
        await delRef.remove();
    } catch (error) {
        console.log(error);
    }
}
module.exports={addCompleted, getCompleted, updateCompleted, deleteCompleted}
