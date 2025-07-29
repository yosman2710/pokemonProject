import userModel from "../models/userModel.js";
import md5 from "md5";
import {Error} from "mongoose";

export const createUser = async ({username,email ,password }) => {
    const user = await userModel.findOne({email:email});
    if (user) throw new Error("el usuario existe");
    const newUser = await userModel.create({
        username,
        email,
        password: md5(password),
    });
    return await newUser.save();
};

export const validateUser = async ({email ,password}) => {
    const user = await userModel.findOne({email:email});
    if (!user || user.password!== md5(password)){
        throw new Error("credenciales incorrectas");
    }
    return user;
}