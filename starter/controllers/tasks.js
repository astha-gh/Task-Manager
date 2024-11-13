const Task = require('../models/Tasks');

const getAllTasks = (req , res) => {
    res.send("Get all tasks");
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
};


const getTask = (req , res) => {
    res.json({id : req.params.id});
}

const updateTasks = (req , res) => {
    res.send("Update task");
}

const deleteTasks = (req , res) => {
    res.send("Delete task");
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}