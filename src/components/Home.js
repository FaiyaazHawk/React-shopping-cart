import React from "react";
import "../styles/Home.css"
import { Container } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';
import Shop from "../images/mike-petrucci-unsplash.jpg"

const Home = () => {

    return (
        <Container>
            <h1>Welcome to the world of Fortnite</h1>
            <p>See whats on sale in the store <strong>today</strong></p>
            
            <Figure>
                <Figure.Image
                width={500}
                height={400}
                alt="store image"
                src={Shop}
                />
                <Figure.Caption>
                    A world of wonder awaits
                </Figure.Caption>
            </Figure>
            <div className="fixed-bottom">
                <footer>Made by Faiyaaz Haque</footer>
            </div>
        </Container>
    )

}

export default Home