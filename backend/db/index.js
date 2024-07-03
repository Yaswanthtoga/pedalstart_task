import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "../logs/index.js";
dotenv.config();

export const dbStart = async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
          .then(()=>logger.info("Connected to database"))
          .catch((err)=>logger.error(err));
}
