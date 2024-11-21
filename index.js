 import express from "express";
 import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "./config/database.js";
import User from "./models/User.js";
import router from "./routes/Submissionroutes.js";


const app=express();

const PORT=4000 || process.env.PORT;

app.use(express.json())

//mouting the routes
app.use("/api/v1",router)

dotenv.config();


dbConnect();




app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`)
})

// const app=express();

// const PORT=4000;

// dotenv.config();


// const dbConnect=async()=>{
//     try {
//        await mongoose.connect(process.env.MONGODB_URL)
//        console.log("MongoDB connected successfully")
//     } catch (error) {
//         console.log(error);
//         console.log("Connection failed",error)
//     }
// }