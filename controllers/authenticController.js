import {createUser, validateUser} from '../services/serviceUser.js';
import {generateToken} from '../services/auth.js';
import tokenModel from '../models/tokenModel.js';

export const registerUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(200).json({message: 'user created successfully.', userId: user._id});
    }catch(err) {
        res.status(400).json({error: 'error creating user', errors: err.message});
    }
}

export const login = async (req, res) => {
    try {
        const user = await validateUser(req.body);
        const token = generateToken(user._id);
        await tokenModel.create({
            userId: user._id,
            token: token,
            expiresAt: new Date(Date.now()+ 60 * 60 * 1000),
        })

        res.status(200).json({message: 'user login successfully.', userId: user._id, token: token});
    }catch(err) {
        res.status(401).json({error: 'error login', errors: err.message});
    }
}
