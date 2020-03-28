import express from 'express';
import scores from './scores.route';

const router = express.Router();

router.use('/scores', scores);

export default router;
