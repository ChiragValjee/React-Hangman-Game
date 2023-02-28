import './App.css';
import Hangman from "./components/hangmanMain";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Instructions from "./components/instructions";
import Links from "./components/links";
import React from "react";

//Inside the Router component, there is a div element with the class App, which contains the rest of the app's content.
//The Routes component is used to define the routes of the app.
// It contains two Route components: one for the homepage ("/") and one for the instructions page ("/instructions").

function App() {
    return (
        <Router>
            <div className="App">
                <div className="header">
                    <Links/>
                    <h1>HANGMAN</h1>
                </div>

                <Routes>
                    <Route path="/" element={<Hangman/>}/>
                    <Route exact path="/instructions"
                           element={<Instructions/>}>
                    </Route>
                </Routes>

            </div>
        </Router>
    );
}

export default App;
