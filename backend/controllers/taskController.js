const Task = require("../models/taskModel");


//Create tasks
const createTask = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)

    } catch (err) {
        res.statu (500).json({ msg: err.message })
    }
}

//getting single task 
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json(`no task with id  : ${id}`)
        }
        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
};


//geting all task which will pass in database
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

// delete the single task 
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`no task with id  : ${id}`)
        }
        res.status(200).send("task deleted successfully")
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

//Update a single task 
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            { _id: id }, req.body, { new: true, runValidators: true }
        )
        if (!task) {
            return res.status(404).json(`no task with id  : ${id}`)
        }
        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}



module.exports = { createTask, getTasks, getTask,  deleteTask, updateTask }