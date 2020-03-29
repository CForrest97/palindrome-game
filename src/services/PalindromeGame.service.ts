import Score from '../interfaces/Score.interface';
import PalindromeError from '../errors/PalindromeError';
import { isPalindrome, parseWord } from './Palindrome.service';
import Entry from '../interfaces/Entry.interface';

export default class PalindromeGame {
  private scores: Score[] = [];

  private static MAX_NUMBER_OF_SCORES_TO_SHOW = 5;

  private static calculateWordScore(word: string): number {
    if (isPalindrome(word)) {
      return parseWord(word).length;
    }
    throw new PalindromeError(`"${word}" is not a palindrome`);
  }

  public getTopScores(): Score[] {
    const sortedScores = Array.from(this.scores).sort((a, b) => b.points - a.points);
    return sortedScores.slice(0, PalindromeGame.MAX_NUMBER_OF_SCORES_TO_SHOW);
  }

  public addEntry({ name, word }: Entry): number {
    const points = PalindromeGame.calculateWordScore(word);
    this.scores.push({ name, points });
    return points;
  }
}
