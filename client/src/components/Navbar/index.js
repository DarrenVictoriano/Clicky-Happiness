import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand mb-0 h1" to="/">
                Clicky-Happiness
            </Link>

            <span className="navbar-brand mb-0 h1">
                Score: {props.score}
                <i className="fas fa-grip-lines-vertical mx-3"></i>
                Top Score: {props.topScore}
            </span>

        </nav>
    )
}

export default Nav;