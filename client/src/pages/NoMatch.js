import React from "react";
import Nav from "../components/Navbar";
import Header from "../components/Header";
import bg from "../images/bg.jpg";
import Container from "../components/Container";
import "./style.css";

function NoMatch() {

    return (
        <div>
            <Nav
                score="0"
                topScore="0"
            />
            <Header
                backgroundImage={bg}
            />
            <Container className="wrapper text-center mx-auto mt-4">
                <h1>
                    Page not found.
                </h1>
            </Container>
        </div>
    );
}

export default NoMatch;