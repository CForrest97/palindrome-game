const trimWord = (word: string): string => word.replace(/\s/g, '');

const isPalindrome = (word: string): boolean => {
  const trimmedWord = trimWord(word);
  return trimmedWord.split('').reverse().join('') === trimmedWord;
};

export { isPalindrome, trimWord };
