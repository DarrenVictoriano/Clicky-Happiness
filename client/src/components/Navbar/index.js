import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
    let displayText = "Click image to begin";
    let color = "text-light";

    if (props.display === "init") {
        displayText = "Click image to begin";
        color = "text-dark";
    } else {
        if (props.display) {
            displayText = "You guessed wrong!";
            color = "text-danger";
        } else {
            displayText = "You guessed correctly!";
            color = "text-success";
        }
    }


    return (

        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand mb-0 h1" to="/">
                Clicky-Game
            </Link>
            <span className={`navbar-brand mb-0 h1 ${color}`}>
                {displayText}
            </span>
            <span className="navbar-brand mb-0 h1">
                Score: {props.score}
                <i className="fas fa-grip-lines-vertical mx-3"></i>
                Top Score: {props.topScore}
            </span>

        </nav>
    )
}

export default Nav;