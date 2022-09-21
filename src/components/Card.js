import React from "react";
import "../styles/Card.css"
import { Container, Button } from "react-bootstrap";



const Card = (props) => {
    const [quantity, setQuantity] = React.useState(0)



    const incrementAmount = () => {
        setQuantity(prevQuantity => prevQuantity+1)
    }

    const decrementAmount = () => {
        setQuantity(prevQuantity => prevQuantity-1)
    }

    

    
    return (
        <>
            <Container className="container">
                <img className="img-thumbnail" src={props.item.image} alt={props.item.title}/>
                <h3>Price:{props.item.price}</h3>
                <input type="number" id="number" value={quantity}></input>
                <Button onClick={incrementAmount}>Add</Button>
                <Button onClick={decrementAmount}>Remove</Button>
                <button >Add to cart</button>
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
            </Container>
            
        </>
        
    )
}

export default Card