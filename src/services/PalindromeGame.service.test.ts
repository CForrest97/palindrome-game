import PalindromeGame from './PalindromeGame.service';
import PalindromeError from '../errors/PalindromeError';
import Logger from '../utils/Logger';

describe('palindrome game', () => {
  it('should get top scores for empty game', () => {
    const palindromeGame = new PalindromeGame();
    expect(palindromeGame.getTopScores()).toEqual([]);
  });
  it('should get top scores for a game with 1 entry', () => {
    const palindromeGame = new PalindromeGame();
    palindromeGame.addEntry('alice', '');
    expect(palindromeGame.getTopScores()).toEqual([
      { name: 'alice', points: 0 },
    ]);
  });
  it('should return the number of points a word is worth', () => {
    const palindromeGame = new PalindromeGame();
    const points = palindromeGame.addEntry('alice', '');
    expect(points).toEqual(0);
  });
  it('should return all scores sorted by points', () => {
    const palindromeGame = new PalindromeGame();
    palindromeGame.addEntry('alice', '');
    palindromeGame.addEntry('bob', 'a');
    expect(palindromeGame.getTopScores()).toEqual([
      { name: 'bob', points: 1 },
      { name: 'alice', points: 0 },
    ]);
  });
  it('should return only the 5 best scores', () => {
    const palindromeGame = new PalindromeGame();

    palindromeGame.addEntry('alice', 'abccba');
    palindromeGame.addEntry('blake', 'abcba');
    palindromeGame.addEntry('carol', 'abba');
    palindromeGame.addEntry('david', 'aba');
    palindromeGame.addEntry('ellen', 'aa');
    palindromeGame.addEntry('frank', 'a');
    palindromeGame.addEntry('grace', '');

    expect(palindromeGame.getTopScores()).toHaveLength(5);
    expect(palindromeGame.getTopScores()).toEqual([
      { name: 'alice', points: 6 },
      { name: 'blake', points: 5 },
      { name: 'carol', points: 4 },
      { name: 'david', points: 3 },
      { name: 'ellen', points: 2 },
    ]);
  });
  it('should ignore spaces when counting points', () => {
    const palindromeGame = new PalindromeGame();

    palindromeGame.addEntry('alice', '  a  bb    a    ');

    expect(palindromeGame.getTopScores()).toEqual([
      { name: 'alice', points: 4 },
    ]);
  });
  it('should throw an error if the word is NOT a palindrome', () => {
    const palindromeGame = new PalindromeGame();

    expect(() => palindromeGame.addEntry('alice', 'abacus')).toThrow(PalindromeError);
    expect(() => palindromeGame.addEntry('alice', 'abacus')).toThrowError('"abacus" is not a palindrome');
  });
  it('should log an error if the word is not a palindrome', () => {
    const palindromeGame = new PalindromeGame();
    const loggerMock = jest.spyOn(Logger.prototype, 'debug');
    loggerMock.mockImplementationOnce((msg: string) => msg);
    expect(() => palindromeGame.addEntry('alice', 'abacus')).toThrow(PalindromeError);
    expect(loggerMock).toHaveBeenCalledTimes(1);
    expect(loggerMock).toHaveBeenCalledWith('"abacus" is not a palindrome');
  });
});