import { Router } from "express";
import { login, register } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", register);
userRouter.post("/signin", login);

export default userRouter;