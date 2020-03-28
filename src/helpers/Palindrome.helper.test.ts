import { isPalindrome, trimWord } from './Palindrome.helper';

describe('palindrome helper', () => {
  describe('isPalindrome', () => {
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
  describe('trimWord', () => {
    it('should remove spaces from word', () => {
      const palindrome = 'a man a plan a canal panama';
      expect(trimWord(palindrome)).toBe('amanaplanacanalpanama');
    });
  });
});
