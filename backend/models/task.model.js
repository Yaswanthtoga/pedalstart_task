import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:false,
    },
    dueDate:{
        type: Date, 
        required: true 
    },
    status: {
        type: String,
        enum: ['pending', 'in_progress', 'completed'],
        default: 'pending'
    },
},{timestamps:true})

taskSchema.pre('findOneAndDelete', async function(next) {
    const task = this;
    try {
      await mongoose.model('User').findByIdAndUpdate(task.user, { $pull: { tasks: task._id } });
      next();
    } catch (error) {
      next(error);
    }
});

export default mongoose.model("Task",taskSchema);