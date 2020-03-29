import { isPalindrome, parseWord } from './Palindrome.service';

describe('palindrome service', () => {
  describe('isPalindrome', () => {
    it('should return true if word is same backwards', () => {
      const palindrome = 'racecar';
      expect(isPalindrome(palindrome)).toBe(true);
    });
    it('should return false if word is different backwards', () => {
      const palindrome = 'abacus';
      expect(isPalindrome(palindrome)).toBe(false);
    });
  });
  describe('parseWord', () => {
    it('should remove spaces from word', () => {
      const palindrome = 'a man a plan a canal panama';
      expect(parseWord(palindrome)).toBe('amanaplanacanalpanama');
    });
    it('should ignore spaces', () => {
      const palindrome = 'a man a plan a canal panama';
      expect(isPalindrome(palindrome)).toBe(true);
    });
    it('should ignore case', () => {
      const palindrome = 'A maN a Plan a CanaL panaMa';
      expect(isPalindrome(palindrome)).toBe(true);
    });
    it('should ignore non-alphanumeric characters', () => {
      const palindrome = 'borrow or rob?';
      expect(isPalindrome(palindrome)).toBe(true);
    });
  });
});
