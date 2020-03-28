import express from 'express';
import { getScores, postScores } from '../controllers/scores.controller';

const router = express.Router();

router.get('', getScores);
router.post('', postScores);

export default router;
