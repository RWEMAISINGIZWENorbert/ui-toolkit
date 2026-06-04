import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dbConnect from './config/connectDB.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser()) 
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
}));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/auth", userRouter);

// Connect to database
dbConnect().then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
});