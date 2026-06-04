import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";

export const register = async (req,res) => {

    try{
        const { email, password } = req.body;

        const exist = await userModel.findOne({email});
        if(exist){
            return res.status(400).json({
                success : false, 
                msg : "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await userModel.create({
            email,
            password : hashedPassword
        });

        await user.save();

        return res.status(201).json({
            success : true, 
            msg : "User created successfully",
            data : user
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({success : false, msg : "Internal server error"});
    }
    
}

export const login = async(req,res) => {
    try {
        const {email, password} = req.body;
        
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({
                success : false, 
                msg : "User doesn't exist"
            });
        } 

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success : false, 
                msg : "Invalid credentials"
            });
        }

        return res.status(200).json({
            success : true, 
            msg : "User logged in successfully",
            data : user
        });
        
    } catch (error) {
        return res.status(500).json({
            success : false, 
            msg : "Internal server error"
        });
    }
}