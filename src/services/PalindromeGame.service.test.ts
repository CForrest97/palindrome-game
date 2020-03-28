import PalindromeGame from './PalindromeGame.service';

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

    expect(() => palindromeGame.addEntry('alice', 'abacus')).toThrowError('"abacus" is not a palindrome');
  });
});
