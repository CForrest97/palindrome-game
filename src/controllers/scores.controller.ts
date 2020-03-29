import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getGame } from '../state';

const getScores = (req: Request, res: Response) => {
  const palindromeGame = getGame();
  res.send(palindromeGame.getTopScores());
};

const postScores = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).jsonp(errors.array());

  const palindromeGame = getGame();
  const { name, word } = req.body;
  try {
    const points = palindromeGame.addEntry({ name, word });
    return res.send({ points });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

export { getScores, postScores };
