import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const dbUrl = process.env.DATABASE_URL;
        await mongoose.connect(dbUrl);
    } catch (error) {
        throw new Error(error);
    }
};
 
 export default dbConnect; 