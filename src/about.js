import React, {Component} from 'react';
import './App.css';


export default class About extends Component {
    render() {
        return(
            <div className="about">
                <div>
                    <p>The earliest form of Rock Paper Scissors was created in Japan and is called Janken.
                       This is a variation of the Chinese games introduced in the 17th century.
                       Janken uses the Rock, Paper and Scissors signs.
                       It is the game that the modern version of Rock Paper Scissors derives from directly.
                       Hand-games using gestures to represent the three conflicting elements of rock, paper and scissors
                       have been most common since the modern version of the game was created in the late 19th Century.
                       This was between the Edo and Meiji periods.
                    </p>
                    <p>
                    By the early 20th century, Rock Paper Scissors had spread beyond Asia, especially through increased Japanese contact with the West. 
                    Its English language name is therefore taken from a translation of the names of the three Japanese hand-gestures for rock, paper and scissors;
                    elsewhere in Asia the open-palm gesture represents “cloth” rather than “paper”.
                    The shape of the scissors is also adopted from the Japanese style.
                    </p>
                </div>
            </div>

        )
    }
}