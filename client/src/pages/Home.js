// Import React and React Router Dom
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import Components Below
import Nav from "../components/Navbar";
import Header from "../components/Header";
import bg from "../images/bg.jpg";
import Container from "../components/Container";
import ImageCard from "../components/ImageCard";
import "./style.css";

class Home extends React.Component {
    state = {
        score: 0,
        topScore: 0
    }
    render() {

        let imageList = ["Beth.jpg", "Bird.jpg", "Brad.jpg", "Diane.jpg", "Donna.jpg", "Gene.jpg", "Jerry.jpg", "Morty.jpg", "Poopy.jpg", "Rick.jpg", "Summer.jpg", "Wong.jpg"];
        let renderImage = imageList.map(image => {
            return (
                <ImageCard
                    key={image}
                    src={require(`../images/characters/${image}`)}
                />
            );
        });

        return (
            <div>
                <Nav
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Header
                    backgroundImage={bg}
                />

                <Container className="wrapper text-center mx-auto mt-4">
                    {renderImage}
                </Container>

            </div>
        );

    }
}

export default Home;