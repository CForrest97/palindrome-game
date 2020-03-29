import PalindromeGame from './PalindromeGame.service';
import PalindromeError from '../errors/PalindromeError';

describe('palindrome game', () => {
  it('should get top scores for empty game', () => {
    const palindromeGame = new PalindromeGame();
    expect(palindromeGame.getTopScores()).toEqual([]);
  });
  it('should get top scores for a game with 1 entry', () => {
    const palindromeGame = new PalindromeGame();
    palindromeGame.addEntry({ name: 'alice', word: '' });
    expect(palindromeGame.getTopScores()).toEqual([
      { name: 'alice', points: 0 },
    ]);
  });
  it('should return the number of points a word is worth', () => {
    const palindromeGame = new PalindromeGame();
    const points = palindromeGame.addEntry({ name: 'alice', word: '' });
    expect(points).toEqual(0);
  });
  it('should return all scores sorted by points', () => {
    const palindromeGame = new PalindromeGame();
    palindromeGame.addEntry({ name: 'alice', word: '' });
    palindromeGame.addEntry({ name: 'bob', word: 'a' });
    expect(palindromeGame.getTopScores()).toEqual([
      { name: 'bob', points: 1 },
      { name: 'alice', points: 0 },
    ]);
  });
  it('should return only the 5 best scores', () => {
    const palindromeGame = new PalindromeGame();

    palindromeGame.addEntry({ name: 'alice', word: 'abccba' });
    palindromeGame.addEntry({ name: 'blake', word: 'abcba' });
    palindromeGame.addEntry({ name: 'carol', word: 'abba' });
    palindromeGame.addEntry({ name: 'david', word: 'aba' });
    palindromeGame.addEntry({ name: 'ellen', word: 'aa' });
    palindromeGame.addEntry({ name: 'frank', word: 'a' });
    palindromeGame.addEntry({ name: 'grace', word: '' });

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

    palindromeGame.addEntry({ name: 'alice', word: '  a  bb    a    ' });

    expect(palindromeGame.getTopScores()).toEqual([
      { name: 'alice', points: 4 },
    ]);
  });
  it('should throw an error if the word is NOT a palindrome', () => {
    const palindromeGame = new PalindromeGame();

    expect(() => palindromeGame.addEntry({ name: 'alice', word: 'abacus' })).toThrow(PalindromeError);
    expect(() => palindromeGame.addEntry({ name: 'alice', word: 'abacus' })).toThrowError('"abacus" is not a palindrome');
  });
});
