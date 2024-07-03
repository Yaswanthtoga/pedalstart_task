import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        validate: {
            validator: function(v) {
              return /^(?=.*[0-9])(?=.*[!@#$%^&*])/.test(v);
            },
            message: 'Password must contain at least one number and one special character.'
        }
    },
    tasks:[{type: Schema.Types.ObjectId,ref: 'Task'}]
},{timestamps:true})

export default mongoose.model("User",userSchema);