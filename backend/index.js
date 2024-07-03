import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.router.js"
import { dbStart } from "./db/index.js";
import logger from "./logs/index.js";
import errorHandler from "./middlewares/error.middleware.js";
import taskRoutes from "./routes/task.router.js";
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth/",authRoutes);
app.use("/api/v1/",taskRoutes);
app.use(errorHandler);
app.listen(port,async ()=>{
    await dbStart();
    logger.info(`Server Started at ${port}`)
})