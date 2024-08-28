const db=require('../configs/firebase');
const ref=db.ref("progress");

const addProgress=async(data)=>{
    try {
        const newRef=ref.push();
        const id=newRef.key;
        const dataWithId={...data, id};
        await newRef.set(dataWithId);
        return dataWithId;
    } catch (error) {
        console.log(error);
    }
};

const getAllProgress=async()=>{
    try {
        const snapshot=await ref.once("value");
        const progress=snapshot.val();
        return progress;
    } catch (error) {
        console.log(error);
    }
}
const updateProgress= async (id, newData)=>{
    try {
        const proRef=ref.child(id);
        const newDataWithId={...newData, id};
        return await proRef.update(newDataWithId);
    } catch (error) {
        console.log(error);
    }
}
const deleteProgress=async(id)=>{
    try {
        const proRef=ref.child(id);
        const snapshot=await ref.once('value');
        const dataCount=snapshot.exists()?snapshot.numChildren():0;
        if(dataCount===1)await ref.set({placeholder : ""})
        await proRef.remove();
    } catch (error) {
        console.log(error);
    }
}
module.exports={addProgress, getAllProgress, updateProgress, deleteProgress}
