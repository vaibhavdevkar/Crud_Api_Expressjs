const mongoose = require("mongoose")


const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean, 
        required: false
    }
})


const Task = mongoose.model("Task", taskSchema)

module.exports = Task



























































































// const mongoose = require('mongoose')

// const taskSchema = mongoose.Schema(
//     {
//         name : {
//             type : String,
//             required : [true , 'Please add a task'], 
//         },
//         completed: {
//             type: Boolean,
//             required: true,
//             default : false,
//         },
//     },
//     {
//         timestamps: true 
//     }
// )

//  const Task = mongoose.model("Task", taskSchema)

//  module.exports = Task; 