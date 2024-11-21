import mongoose from 'mongoose';

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        // required: true
        type:String,  
        required:true,  
    }
});

const subjectModel = mongoose.model("Subject", subjectSchema);

export default subjectModel;