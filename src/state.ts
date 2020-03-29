import PalindromeGame from './services/PalindromeGame.service';

let game: PalindromeGame;

const setGame = (palindromeGame: PalindromeGame) => { game = palindromeGame; };

const getGame = () => game;

export { setGame, getGame };
