const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to the MongoDB database
const MONGO_URI = 'mongodb://192.168.29.199/PLC_Data_DB1';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the Sample_data1 collection
const sampleDataSchema = new mongoose.Schema({
  // Define your schema fields here
  field1: String,
  field2: Number,
  // ...
});

// Create a model for the Sample_data1 collection using the schema
const SampleData = mongoose.model('Sample_data1', sampleDataSchema);

// Route to fetch all documents from the Sample_data1 collection
app.get('/api/sampledata', async (req, res) => {
  try {
    const sampleData = await SampleData.find({});
    res.json(sampleData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));












































// const dotenv = require("dotenv").config()
// const express = require("express")
// const mongoose = require("mongoose")
// const Task = require("./models/taskModel")
// const TaskRoutes = require('./routes/taskRoute')

// const app = express()

// app.use(express.json())

// app.use(TaskRoutes) 
 
// mongoose.connect(process.env.MONGO_URI).then(() =>{
//   app.listen(4200, (req, res) => {
//      console.log("server is started on port 4200")
//   })  
// })
// .catch((err) => console.log(err))


































































































// const dotenv = require("dotenv").config()
// const express = require("express")
// const  mongoose  = require("mongoose")
// const connetDB = require("./config/connectDB")
// const Task = require("./models/taskModel")

// const app = express()

// app.use(express.json())

// //routes
// app.get("/", (req , res) => {
//   res.send("this is get requires form server")
// })

// //post routes for creating Task
// app.post("/api/tasks", async (req, res) => {
//   try{
//     const task = await Task.create(req.body)
//     res.status(200).json(task)
//   }catch(error){
//     console.log(error);
//   }
// })

// //get all posts from the database 
// app.get("/api/tasks", async (req, res) => {
//   try{
//     const tasks = await Task.find()
//     res.status(200).json(tasks)
//   }catch(Err){
//     res.status(500).json({msg : Err.message})
//   }
// })



// const PORT = process.env.PORT || 4200

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`server is stared at port ${PORT}`)
//     })
//   })
//   .catch((err) => console.log(err))

  






















































// app.get('/' , (req , res) => {
//   res.send("this is data will send to server")
// })

// const logger = (req , res , next) => {
//   console.log(req.method)
//   console.log("middleware")
//   next()
// }


// Routes on home 


//Create a task 

// app.post("/api/tasks", async (req , res) => {
//   try{
//     const task = await Task.create(req.body)
//     res.status(200).json(task) 
//   }catch (err){
//       res.status(500).json({msg : err.message})
//   }
// })
 
//Get / Read data from mongodb

// app.get('/api/tasks' , async (req , res) => {
//   try{  
//     const tasks = await Task.find()
//     res.status(200).json(tasks)

//   }catch(err){
//       res.status(500).json({msg : err.message})
//   }
// })

// connection mongo and server running after that

// const startServer = async () => {
//   try{
//      await connetDB();
//      app.listen(PORT, () => {
//       console.log("server is started bro")
//      }) 
//   }catch(Err){
//     console.log("err");
//   }
// }

// startServer()






//MAin code 
// const dotenv = require("dotenv").config()
// const express = require("express")
// const mongoose = require("mongoose")
// const Task = require("./models/taskModel")
// const TaskRoutes = require('./routes/taskRoute')

// const app = express()

// app.use(express.json())

// app.use(TaskRoutes) 
 
// mongoose.connect(process.env.MONGO_URI).then(() =>{
//   app.listen(4200, (req, res) => {
//      console.log("server is started on port 4200")
//   })  
// })
// .catch((err) => console.log(err))


