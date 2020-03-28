import Score from '../interfaces/Score.interface';
import PalindromeError from '../errors/PalindromeError';
import { isPalindrome, trimWord } from '../helpers/Palindrome.helper';
import Logger from '../utils/Logger';

const logger = new Logger(__filename);

export default class PalindromeGame {
  private scores: Score[] = [];

  private static MAX_NUMBER_OF_SCORES_TO_SHOW = 5;

  private static calculateWordScore(word: string): number {
    if (isPalindrome(word)) {
      return trimWord(word).length;
    }
    logger.debug(`"${word}" is not a palindrome`);
    throw new PalindromeError(`"${word}" is not a palindrome`);
  }

  public getTopScores(): Score[] {
    const sortedScores = Array.from(this.scores).sort((a, b) => b.points - a.points);
    return sortedScores.slice(0, PalindromeGame.MAX_NUMBER_OF_SCORES_TO_SHOW);
  }

  public addEntry(name: string, word: string): number {
    const points = PalindromeGame.calculateWordScore(word);
    this.scores.push({ name, points });
    return points;
  }
}
