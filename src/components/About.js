import React from "react";
import { Container } from "react-bootstrap";
import "../styles/About.css"
import Carousel from 'react-bootstrap/Carousel';
import reactImg from "../images/react.jpg"
import BSImg from "../images/bootstrap.jpeg"
import RBSImg from "../images/react-bootstrap.png"


const About = () => {

    return (
        <Container>
            <div className="container">
                <h2>Some fluff text to sell you on the elegance of the store</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper lorem vel urna ullamcorper blandit. Suspendisse sagittis, felis non rutrum tincidunt, mauris neque dapibus enim, quis aliquam enim risus eget tortor. Aenean id nulla non tortor tempor rutrum. Maecenas justo massa, porta nec ullamcorper quis, consequat aliquet tortor. Proin tempus lorem mauris, vel laoreet orci scelerisque eu. Duis hendrerit purus quis sem dictum sagittis. Duis metus diam, efficitur vitae massa ac, tempus dignissim augue. Donec fermentum malesuada erat, ac suscipit mauris elementum non. Phasellus eget velit enim. Cras blandit pretium augue eget scelerisque. Maecenas elit orci, elementum eget risus ac, sagittis tincidunt nunc. Fusce congue risus ut justo tincidunt, ac mollis est posuere. Aenean vel quam sit amet nunc dapibus gravida. In feugiat fringilla suscipit. Nulla at elementum est, sit amet volutpat metus.</p>
            </div>
            <h4>Made using the following</h4>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="img"
                    src={reactImg}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img"
                    src={BSImg}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img"
                    src={RBSImg}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
        
    )

}

export default About