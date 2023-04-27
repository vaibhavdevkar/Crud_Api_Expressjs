const mongoose = require("mongoose")


const connetDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected");
    }catch(Err){
        console.log(Err);
    }
}

module.exports = connetDB













































// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.MONGO_URI)
//         console.log(`mongodb connected`)
//     } catch (err) {
//         console.log(err);
//         process.exit(1)
//     }
// }
// module.exports =  connectDB


// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(4200 , (req , res) => {
//       console.log("server is started on port 4200")
//     })  
//   }catch(err) {
//     console.log(err)
//   }
// }

// startServer()