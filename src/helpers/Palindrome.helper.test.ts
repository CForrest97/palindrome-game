import { isPalindrome } from './Palindrome.helper';

describe('palindrome helper', () => {
  it('should return true if word is same backwards', () => {
    const palindrome = 'racecar';
    expect(isPalindrome(palindrome)).toBe(true);
  });
  it('should return false if word is different backwards', () => {
    const palindrome = 'abacus';
    expect(isPalindrome(palindrome)).toBe(false);
  });
  it('should ignore spaces', () => {
    const palindrome = 'a man a plan a canal panama';
    expect(isPalindrome(palindrome)).toBe(true);
  });
});
