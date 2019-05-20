import React from "react";
import "./style.css"

function Header(props) {
    return (
        <header
            className="header text-center pt-5"
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
            <div className="head-wrap">
                <h1>
                    Clicky-Game
                </h1>
                <h4>
                    Click on an image to earn points, but don't click on any more than once!
                </h4>
            </div>
        </header>
    );
}

export default Header;