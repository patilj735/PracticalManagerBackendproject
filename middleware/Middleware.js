import userModel from "../models/User.js";

export const isAdmin=async(req,res,next)=>{
    try {
        const {email}=req.body;
        const userinfo=await userModel.findOne({email})

        if(userinfo && userinfo.role=="Admin"){
            next();
        }
        else {
            res.status(403).json({
                message:"Access denied,only admin can access"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Error occured"
        })
    }
}


export const isTeacher=async(req,res,next)=>{
    try {
        const {email}=req.body;
        const userinfo=await userModel.findOne({email})

        if(userinfo && userinfo.role=="Teacher"){
            next();
        }
        else {
            res.status(403).json({
                message:"Access denied,only teacher can access"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Error occured"
        })
    }
}

export const isStudent=async(req,res,next)=>{
    try {
        const { email }=req.body;
        const userinfo=await userModel.findOne({ email })

        if(userinfo && userinfo.role=="Student"){
            next();
        }
        else {
            res.status(403).json({
                message:"Access denied,only student can access"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Error occured"
        })
    }
}