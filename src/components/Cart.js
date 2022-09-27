import React from "react";
import CheckoutCard from "./CheckoutCard";
import { Container } from "react-bootstrap";


const Cart = (props) => {
    
    const checkoutelements = props.cartData.map(item => (
        <CheckoutCard key={item.item.id} item={item} removeItems={props.removeItems}/>
    ))

    return (
        <Container style={{display: 'flex'}}>
            {props.cartData.length === 0 && <h1>Cart is empty!!</h1>}
           {checkoutelements}
        </Container>
    )
}

export default Cart