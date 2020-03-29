const trimWord = (word: string): string => word.replace(/\s/g, '');
const parseWord = (word: string): string => trimWord(word)
  .toLowerCase()
  .replace(/[^0-9a-z]/gi, '');

const isPalindrome = (word: string): boolean => {
  const parsedWord = parseWord(word);
  return parsedWord.split('').reverse().join('') === parsedWord;
};

export { isPalindrome, parseWord };
