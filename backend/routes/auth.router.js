import { Router } from "express";
import { signUp,signIn, logout } from "../controllers/auth.controller.js";
const authRouter = Router();

authRouter.post("/register",signUp)
authRouter.post("/login",signIn)
authRouter.post("/logout",logout)

export default authRouter;