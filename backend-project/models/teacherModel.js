import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role : String
})

const teacherModel = mongoose.model("teacher", teacherSchema);
export default teacherModel;