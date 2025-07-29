import { Router } from 'express';
import { registerUser, login } from '../controllers/authenticController.js';

const router = Router();
console.log(typeof(registerUser));

router.post('/register', registerUser);

router.post('/login', login);

export default router;
