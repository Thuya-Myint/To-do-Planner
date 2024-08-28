const db = require("../configs/firebase");
const ref = db.ref("todos");

const addToDo = async (data) => {
  try {
    const newRef = ref.push();
    const id = newRef.key;
    const dataWithId = { ...data, id };
    await newRef.set(dataWithId);
    return dataWithId;
  } catch (error) {
    console.log(error);
  }
};
const getAllToDo = async () => {
  try {
    const snapshot = await ref.once("value");
    const todos = snapshot.val();
        return todos;

  } catch (error) {
    console.log(error);
  }
};
const updateToDo = async (id, newData) => {
  try {
    const todoRef = ref.child(id);
    const newDataWithId = { ...newData, id };
    await todoRef.update(newDataWithId);
  } catch (error) {
    console.log(error);
  }
};
const deleteToDo = async (id) => {
  try {
    const todoRef = ref.child(id);
    const snapshot=await ref.once("value");
    const dataCount=snapshot.exists()?snapshot.numChildren():0;

    if(dataCount===1)await ref.set({placeholder : "empty"});
    await todoRef.remove();
  } catch (error) {
    console.log(error);
  }
};
module.exports = { addToDo, getAllToDo, updateToDo, deleteToDo };
