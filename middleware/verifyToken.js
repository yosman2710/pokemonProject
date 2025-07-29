import { verifyToken as verifyJwt } from '../services/auth.js';
import tokenModel from "../models/tokenModel.js";
export async function verifyToken(req, res, next) {
    const header = req.headers['authorization'];
    if (!header) {
        return res.status(403).json({message: 'No se proporcionó el token'});
    }

    const parts = header.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(403).json({message: 'Formato de token inválido'});
    }

    const token = parts[1];

    const decoded = verifyJwt(token);
    if (!decoded) {
        return res.status(401).json({message: 'Token inválido o expirado'});
    }
    const exists = await tokenModel.findOne({token: token})
    if (!exists) {
        return res.status(401).json({message: 'Token revocado o no registrado'});
    }


    req.user = decoded;
    next();
}

