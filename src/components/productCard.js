import React from "react";
import "../styles/Card.css"
import { Card, Button } from "react-bootstrap";



const productCard = (props) => {
    
    const [quantity, setQuantity] = React.useState(0)



    const incrementAmount = () => {
        setQuantity(prevQuantity => prevQuantity+1)
    }

    const decrementAmount = () => {
        setQuantity(prevQuantity => prevQuantity-1)
    }

    const addToCart = () => {
        console.log(props)
        props.addToCart(props.item, quantity)
    }
    

    
    return (
        <>
            <Card style={{width: '15rem'}}>
                <img className="img-thumbnail" src={props.item.image} alt={props.item.title}/>
                <h3>Price:{props.item.price}</h3>
                <div className="priceblock">
                    <input type="number" id="number" value={quantity} onChange={(e)=>{setQuantity(parseInt(e.target.value))}}></input>
                    <Button onClick={incrementAmount}>Add</Button>
                    <Button onClick={decrementAmount}>Remove</Button>
                    <Button onClick={addToCart} >Add to cart</Button>
                </div>
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
            </Card>
            
        </>
        
    )
}

export default productCard