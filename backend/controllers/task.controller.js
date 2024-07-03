import User from "../models/user.model.js"
import Task from "../models/task.model.js";
import AppError from "../error/index.js"


export const createTask = async (req,res,next)=>{
    try {
        const { userId, title, description, dueDate } = req.body;
        if(!userId){
            return next(new AppError("user not authenticated",403));
        }
    
        const newTask = new Task({
          user: userId,
          title,
          description,
          dueDate
        });
    
        const savedTask = await newTask.save();
        await User.findByIdAndUpdate(userId, { $push: { tasks: savedTask._id } });
    
        return res.status(201).json({
          status: 'success',
          data: savedTask
        });
    }catch (error) {
        return next(new AppError(error,500));
    }
}
export const getTask = async (req,res)=>{
    try {
        const taskId = req.params.id;
        const {userId} = req.body;
        let tasks;

        if(!taskId){
            tasks = await Task.find({user:userId});
        }else{
            tasks = await Task.findById(taskId);
        }

        return res.status(200).json({
            status: 'success',
            data: tasks
        });
    } catch (error) {
        return next(new AppError(error,500));
    }
}
export const deleteTask = async (req,res)=>{
    try{
        const taskId = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(taskId);
    
        if (!deletedTask) {
          return next(new AppError('Task not found',404));
        }
    
        await User.findByIdAndUpdate(deletedTask.user, { $pull: { tasks: taskId } });
    
        return res.status(200).json({
          status: 'success',
          message: 'Task deleted'
        });
    }catch (error) {
        return next(new AppError(error,500));
    }
}
export const updateTask = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    
        if (!updatedTask) {
          return res.status(404).json({
            status: 'fail',
            message: 'Task not found'
          });
        }
    
        return res.status(200).json({
          status: 'success',
          data: updatedTask
        });
      } catch (error) {
        return next(new AppError(error,500));
      }
}