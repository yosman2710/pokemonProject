import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a poke_db");
    } catch (error) {
        console.log("no se pudo conectar porque: ", error.message);
    }
};

