import express from 'express';
import { searchPokemon } from '../controllers/pokeController.js';
import {verifyToken} from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/search',verifyToken, searchPokemon);

export default router;