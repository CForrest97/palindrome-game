import { Router } from 'express';
import { check } from 'express-validator';
import { getScores, postScores } from '../controllers/scores.controller';

const router = Router();

router.get('', getScores);

router.post('', [
  check('name')
    .isString()
    .withMessage('`name` field must be a string')
    .escape()
    .notEmpty()
    .withMessage('`name` field is required')
    .isAlpha()
    .withMessage('`name` field must only contain alphabetic characters'),
  check('word')
    .isString()
    .escape()
    .withMessage('`word` field is required'),
], postScores);

export default router;
