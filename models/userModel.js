import mongoose from "mongoose";

const User = mongoose.Schema({
    username: {type: String,required: true, unique: true},
    email: {type:String, unique:true,required: true},
    password: {type: String,required: true},
    createdAt: {type: Date, default: Date.now},
});

export default mongoose.model('Users', User,'users');