import User from "../models/User.js";

export const createAdmin=async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        const users = new User({
            name,
            email,
            password,
            role:"Admin"
        })
        
        const savedusers=await users.save();
        res.json({
            savedusers,
            message:"User created successfully"
        })
    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }
};

export const createTeacher=async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        const users = new User({
            name,
            email,
            password,
            role:"Teacher"
        })
        
        const savedusers=await users.save();
        res.json({
            savedusers,
            message:"User created successfully"
        })
    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }
};

export const createStudent=async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        const users = new User({
            name,
            email,
            password,
            role:"Student"
        })
        
        const savedusers=await users.save();
        res.json({
            savedusers,
            message:"User created successfully"
        })
    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }
};

export const getAllUsers=async(req,res)=>{
    try {
        const getusers=await User.find()
        res.json({
            getusers
    })
    } catch(error){
        res.json({
            error:"Cannot fetch data"
    })
        console.log(error);
        
    }
}

export const getAllAdmins = async (req, res) => {
    try {
        
        const getAdmins = await User.find({ role: 'Admin' }); 
        res.json({
             getAdmins
        });
    } catch (error) {
        res.json({
            error: "Cannot fetch admins data"
        });
        console.log(error);
    }
};

export const getAllTeachers = async (req, res) => {
    try {
        
        const getTeachers = await User.find({ role: 'Teacher' }); 
        res.json({
             getTeachers
        });
    } catch (error) {
        res.json({
            error: "Cannot fetch teachers data"
        });
        console.log(error);
    }
};

export const getAllStudents = async (req, res) => {
    try {
        
        const getStudents = await User.find({ role: 'Student' }); 
        res.json({
            getStudents
        });
    } catch (error) {
        res.json({
            error: "Cannot fetch students data"
        });
        console.log(error);
    }
};