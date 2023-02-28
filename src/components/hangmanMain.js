import React from "react";
import {useState} from "react";
import {randomWord} from "./words";
import HangmanImages from "./hangmanImages";

function Hangman({maxWrong = 10}) {
    const [mistake, setMistake] = useState(0);
    const [guessed, setGuessed] = useState(new Set([]));
    const [answer, setAnswer] = useState(randomWord());

    // These are three state variables used by the component.
    // mistake represents the number of incorrect guesses the player has made,
    // guessed is a set of letters that the player has guessed,
    // and answer is the word the player is trying to guess.
    // These state variables are initialized with useState hooks.

    const gameOver = mistake >= maxWrong;

    let gameStatus = generateButtons();
    let extraInfo = "GUESS THE CAR BRAND BELOW";
    const leftOver = maxWrong - mistake;

    // These variables are used for rendering the game state.
    // gameStatus is initially set to the result of the generateButtons function, which creates the buttons used to guess letters.
    // extraInfo is some additional information displayed to the player.
    // leftOver represents the number of incorrect guesses the player can still make before losing the game.

    function guessedWord() {
        return answer.split("").map((letter) =>
            guessed.has(letter) ? letter : " _ "
        );
    }

    // This function returns an array of letters and underscores, representing the current state of the guessed word.
    // If a letter has been guessed correctly, it is displayed. Otherwise, an underscore is displayed.

    function handleGuess(e) {
        let letter = e.target.value;
        setGuessed((prevGuessed) => new Set([...prevGuessed, letter]));
        setMistake((prevMistake) => prevMistake + (answer.includes(letter) ? 0 : 1));
    }

    // This function is called when the player guesses a letter.
    // It adds the guessed letter to the guessed set and updates the mistake variable depending on whether the letter is in the answer word.

    const winner = guessedWord().join("") === answer;

    if (winner) {
        gameStatus = "You won the game :)";
    }

    if (gameOver) {
        gameStatus = "You lost the game :(";
        extraInfo = null;
    }

    // These if statements check if the player has won or lost the game,
    // and updates the gameStatus and extraInfo variables accordingly.

    function generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz"
            .split("")
            .map((letter) => (
                <button
                    className={guessed.has(letter) ? "buttons2" : "buttons"}
                    key={letter}
                    value={letter}
                    onClick={handleGuess}
                    disabled={guessed.has(letter)}
                >
                    {letter}
                </button>
            ));
    }

    // This function generates the buttons used to guess letters.
    // It maps over the alphabet and creates a button for each letter.
    // The className is set based on whether the letter has already been guessed, and the onClick function is set to handleGuess.

    function resetGame() {
        setMistake(0);
        setGuessed(new Set([]));
        setAnswer(randomWord());
    }

    // This function resets the game by resetting the `mistake

    return (
        <div>
            <div className="primaryContent">
                <div className="data">
                    <p className="wrong">Wrong Guesses: {mistake}</p>
                    <p className="right">Attempts remaining: {leftOver}</p>
                </div>
                <HangmanImages mistake={mistake} className="images"/>
            </div>
            <h3 className="extraInfo">{extraInfo}</h3>
            <p className="letters">
                {!gameOver ? guessedWord() : `The answer is: ${answer}`}
            </p>
            <div className="center">
                <p className="buttonsInfo">{gameStatus}</p>
            </div>
            <button type="button" onClick={resetGame} className="reset">
                Reset game
            </button>
        </div>
    );
}

export default Hangman;