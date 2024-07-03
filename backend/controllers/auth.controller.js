import userModel from "../models/user.model.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AppError from "../error/index.js"
import logger from "../logs/index.js";
import dotenv from 'dotenv'
dotenv.config();

export const signUp = async (req,res,next)=>{
    const { username,password,email } = req.body;
    
    try {
        const user = await userModel.findOne({email});
        if(user){
            logger.debug(`user with mailid - ${email} already existed`);
            return next(new AppError("user already existed",409));
        }

        const hashedPassword = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
        const newUser = new userModel({
            username,
            password:hashedPassword,
            email
        });

        await newUser.save();
        logger.info(`${email} registered successfully`);
        return res.status(200).json({message:"Registered Succesfully",statuscode:200});

    } catch (error) {
        logger.error(`internal server error`);
        return next(new AppError("Internal Server Error",500));
    }
}


export const signIn = async (req,res,next)=>{

    const { email,password } = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            logger.debug(`user with mailid - ${email} doesn't existed`);
            return next(new AppError("user doesnot existed",404));
        }

        const hashedPassword = user.password;
        if(!bcrypt.compareSync(password,hashedPassword)){
            return next(new AppError("wrong credentials",401));
        }

        const payload = {id:user._id};
        const token = jwt.sign(payload,process.env.JWT_KEY);


        res.cookie("accessToken",token,{
            httpOnly:true
        }).status(200).json({accessToken:token,user});

    } catch (error) {
        logger.error(`internal server error`);
        return next(new AppError("Internal Server Error",500));
    }

};

export const logout = (req,res)=>{
    res.clearCookie("accessToken",{
        sameSite:"none",
        secure:true
    }).status(200).json({message:"Logged Out",status:"success"});
}