import {
  Router, Request, Response, NextFunction,
} from 'express';
import { check, validationResult } from 'express-validator';
import { getScores, postScores } from '../controllers/scores.controller';

const router = Router();

const validatePostRequest = [
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
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).jsonp(errors.array());
    }
    return next();
  },
];

router.get('', getScores);
router.post('', validatePostRequest, postScores);

export default router;
