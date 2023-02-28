//Component created to provide user with instructions if they need help with the game

import React from "react";
import Links from "./links";
import {Link} from "react-router-dom";

function Instructions(){
    return(
        <div className="instructions">

            <h1 className="instructionsHeading">Instructions</h1>
            <p className="instructionsInfo">As the name suggests, hangman is a game that portrays an image of a hanging man. While many believe that the game is a good way for kids to learn new words, some argue that the game is quite offensive. This, however, hasn’t stopped players of all ages from enjoying the game.

                Hangman is a classic guessing game played between two or more players. One player is responsible for choosing the secret word then the rest try to solve it by guessing a letter. Each wrong guess brings you closer to getting hanged. The player with the secret word writes a series of dashes, each representing a letter in the solution. Initially, no further information is given about the secret word other than the length.

                Hangman started off as a paper game but can now be played online as well. It's relatively easy to play and doesn’t have many rules or guidelines.

                Some common hangman game rules include:

                Abbreviations, slang, and foreign languages are not allowed.

                You only get seven wrong guesses.

                If the host/puzzle giver misspells the word, he/she loses the game.

                The host/puzzle giver cannot change the word or phrase in the middle of the game.

                If the word/phrase is completed before the stick man, then the guessing player wins.

                If you want to learn more about the game, this article has narrowed down 8 tips and tricks that might be helpful when playing hangman.</p>

        </div>
    )
}

export default Instructions