import { Request, Response } from 'express';
import PalindromeGame from '../services/PalindromeGame.service';

const palindromeGame = new PalindromeGame();

const getScores = (req: Request, res: Response) => res.send(palindromeGame.getTopScores());

const postScores = (req: Request, res: Response) => {
  const { name, word } = req.body;
  try {
    const points = palindromeGame.addEntry(name, word);
    res.send({ points });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export { getScores, postScores };
