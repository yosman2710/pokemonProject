import mongoose from "mongoose";

    const tokenSchema = new mongoose.Schema({
        userId: {type: mongoose.Types.ObjectId, ref: 'User'},
        token: {type: String,required: true},
        createdAt: {type: Date, default: Date.now()},
        expiresAt: {type: Date}

    });

    export default mongoose.model("Token", tokenSchema, "token");