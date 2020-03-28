const trimWord = (word: string) => word.replace(/\s/g, '');

const isPalindrome = (word: string) => {
  const trimmedWord = trimWord(word);
  return trimmedWord.split('').reverse().join('') === trimmedWord;
};

export { isPalindrome, trimWord };
