const db=require("../configs/firebase");
const ref=db.ref("noti");

const addNoti=async(data)=>{
    try{
        const newRef=ref.push();
        const id = newRef.key;
        const nowDate=new Date();
        const date=nowDate.toLocaleDateString();
        const time=nowDate.toLocaleTimeString("en-us",{
            hour:'2-digit',
            minute:"2-digit",
            hour12:true
        });
        const notiWithId={...data, id, date, time};
        await newRef.set(notiWithId);
        return;
    }catch(error){
        console.error(error);
    }
}
const getAllNoti=async()=>{
    try {
        const snapshot=await ref.once("value");
        const noti=snapshot.val();
        return noti;
    } catch (error) {
        console.log(error);
    }
};
const deleteNoti=async(id)=>{
    try {
        const notiRef=ref.child(id);
        const snapshot=await ref.once('value');
        const dataCount=snapshot.exists()?snapshot.numChildren():0;
        if(dataCount===1)await ref.set({placeholder: ""});
        await notiRef.remove();
    } catch (error) {
        console.log(error);
    }
}
const deleteAllNoti=async()=>{
    try {
        const notiRef=ref;
        await notiRef.remove();
        const snapshot=await ref.once('value');
        const dataCount=snapshot.exists()?snapshot.numChildren():0;
        if(dataCount===0)await ref.push({placeholder : ""});
    } catch (error) {
        console.log(error);
    }
}
module.exports= {addNoti, getAllNoti, deleteNoti, deleteAllNoti};
