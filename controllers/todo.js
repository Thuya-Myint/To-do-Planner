const todoModel = require("../model/todo");

const addToDo = async (req, res) => {
  try {
    const data = req.body;
    const dataSet = await todoModel.addToDo(data);
    res.status(201).json({ dataSet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllToDo = async (req, res) => {
  try {
    const dataSet = await todoModel.getAllToDo();
    res.status(200).json({ dataSet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const toObj = Object.assign({}, newData);

    const dataSet = await todoModel.updateToDo(id, toObj);
    res.status(200).json({ message: "update Success!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const dataSet = await todoModel.deleteToDo(id);
    res.status(200).json({ message: "delete success!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addToDo, getAllToDo, updateToDo, deleteToDo };
