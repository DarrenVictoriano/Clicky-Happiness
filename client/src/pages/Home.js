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
        topScore: 0,
        imageList: ["Beth.jpg", "Bird.jpg", "Brad.jpg", "Diane.jpg", "Donna.jpg", "Gene.jpg", "Jerry.jpg", "Morty.jpg", "Poopy.jpg", "Rick.jpg", "Summer.jpg", "Wong.jpg"],
        clickList: [],
        gameOver: "init"
    }

    shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    handleImageClick = (e) => {

        e.preventDefault();
        let thisImage = e.target.attributes.name.value;
        let clickListArr = this.state.clickList;
        let isInArr = false;

        for (let i = 0; i < clickListArr.length; i++) {

            if (thisImage === clickListArr[i]) {
                console.log(thisImage);
                console.log(clickListArr[i]);
                isInArr = true;
            } else {
                console.log(clickListArr[i]);

                isInArr = false;
            }
        }

        if (isInArr) {
            console.log("game over");

            if (this.state.score >= this.state.topScore) {
                this.setState({
                    topScore: this.state.score
                });
            }

            this.setState({
                gameOver: true,
                score: 0
            });
        } else {
            console.log("add to aaray");

            let joined = this.state.clickList.concat(thisImage);
            console.log(joined);

            this.setState((prevState, props) => ({
                clickList: joined,
                score: prevState.score + 1,
                gameOver: false
            }));

            if (this.state.score === this.state.topScore) {
                this.setState({
                    topScore: this.state.topScore + 1
                });
            }
        }

    }

    render() {

        let renderImage = this.shuffleArray(this.state.imageList).map((image, i) => {
            return (
                <ImageCard
                    key={i}
                    name={image}
                    src={require(`../images/characters/${image}`)}
                    onClick={this.handleImageClick}
                />
            );
        });

        return (
            <div>
                <Nav
                    score={this.state.score}
                    topScore={this.state.topScore}
                    display={this.state.gameOver}
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