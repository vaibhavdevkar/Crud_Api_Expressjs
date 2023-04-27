














































































































// const express = require('express')
// const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController')
// const Task = require('../models/taskModel')

// const router = express.Router()

// router.post('/api/tasks', createTask)
// router.get('/api/tasks', getTasks)
// router.get('/api/tasks/:id', getTask)
// router.delete('/api/tasks/:id', deleteTask)
// router.put('/api/tasks/:id', updateTask)

// module.exports = router;



  

























//create a task

// router.post("/api/tasks", async (req , res) => {
//     try{
//       const task = await Task.create(req.body)
//       res.status(200).json(task) 
//     }catch (err){
//         res.status(500).json({msg : err.message})
//     }
//   })

  //Get / Read data from mongodb

// router.get('/api/tasks' , async (req , res) => {
//     try{  
//       const tasks = await Task.find()
//       res.status(200).json(tasks)
  
//     }catch(err){
//         res.status(500).json({msg : err.message})
//     }
//   })