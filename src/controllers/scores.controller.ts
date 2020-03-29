import { Request, Response } from 'express';
import { getGame } from '../state';
import Logger from '../utils/Logger';

const logger = new Logger(__filename);

const getScores = (req: Request, res: Response) => {
  const palindromeGame = getGame();
  res.send(palindromeGame.getTopScores());
};

const postScores = (req: Request, res: Response) => {
  const palindromeGame = getGame();
  const { name, word } = req.body;
  try {
    const points = palindromeGame.addEntry({ name, word });
    return res.send({ points });
  } catch (err) {
    logger.error(err.message);
    return res.status(400).send(err.message);
  }
};

export { getScores, postScores };
