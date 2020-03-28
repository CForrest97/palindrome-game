import Score from '../interfaces/Score.interface';
import PalindromeError from '../errors/PalindromeError';
import { isPalindrome, trimWord } from '../helpers/Palindrome.helper';

export default class PalindromeGame {
  private scores: Score[] = [];

  private MAX_NUMBER_OF_SCORES_TO_SHOW = 5;

  public getTopScores() {
    const sortedScores = Array.from(this.scores).sort((a, b) => b.points - a.points);
    return sortedScores.slice(0, this.MAX_NUMBER_OF_SCORES_TO_SHOW);
  }

  public addEntry(name: string, word: string) {
    if (!isPalindrome(word)) {
      throw new PalindromeError(`"${word}" is not a palindrome`);
    }
    const trimmedWord = trimWord(word);
    this.scores.push({ name, points: trimmedWord.length });
  }
}
