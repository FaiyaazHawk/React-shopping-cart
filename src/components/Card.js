import React from "react";
import "../styles/Card.css"
import { Container, Button } from "react-bootstrap";



const Card = (props) => {
    console.log(props)
    return (
        <>
            <Container className="container">
                <img className="img-thumbnail" src={props.item.image} alt={props.item.title}/>
                <h3>Price:{props.item.price}</h3>
                <Button>Add</Button>
                <Button>Remove</Button>
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
            </Container>
            
        </>
        
    )
}

export default Card