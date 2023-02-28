//Imported all images from the hangman directory

import React, {useState} from "react";
import step0 from "./hangman/0.jpg"
import step1 from "./hangman/1.jpg"
import step2 from "./hangman/2.jpg"
import step3 from "./hangman/3.jpg"
import step4 from "./hangman/4.jpg"
import step5 from "./hangman/5.jpg"
import step6 from "./hangman/6.jpg"
import step7 from "./hangman/7.jpg"
import step8 from "./hangman/8.jpg"
import step9 from "./hangman/9.jpg"
import step10 from "./hangman/10.jpg"

//Used state to store images in an images variable.
//returned the image depending on how many mistakes the user made.
function HangmanImages({mistake}) {
    const [images] = useState([step0, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10])
    return (
        <div className="hangmanImages">
            <img src={images[mistake]} alt=""/>
        </div>
    )
}

export default HangmanImages