import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role : String
})

const studentModel = mongoose.model("student",studentSchema);
export default studentModel;