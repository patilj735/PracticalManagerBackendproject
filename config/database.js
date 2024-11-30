import mongoose from "mongoose";

const dbConnect= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://janhavipatil:janhavi123@cluster0.0oarv.mongodb.net/PracticalManage")
        console.log("MongoDB connected successfully");
    }   catch(error) {
        console.log("MongoDB connection failed",error);
    }
}
export default dbConnect;
