 import express from "express";
 import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "../config/database.js";
import User from "../models/User.js";
import router from "../routes/Submissionroutes.js";


const app=express();

const PORT=4000 || process.env.PORT;

app.use(express.json())

//mouting the routes
app.use("/api/v1",router)

app.get("/",(req,res)=> {
    res.send("Server is running successfully!");
});
dotenv.config();


dbConnect();




app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`)
})

