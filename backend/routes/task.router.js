import { Router } from "express"
import { verifyToken } from "../middlewares/auth.middleware.js";
import { createTask,deleteTask,updateTask,getTask } from "../controllers/task.controller.js";
const taskRouter = Router();

// create task
taskRouter.post("/create-task",verifyToken,createTask);

// delete task
taskRouter.delete("/delete-task",verifyToken,deleteTask);

// update task details
taskRouter.patch("/update-task",verifyToken,updateTask);

// get task
taskRouter.get("/get-task",verifyToken,getTask);


export default taskRouter;