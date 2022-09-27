import React from "react";
import CheckoutCard from "./CheckoutCard";
import { Container } from "react-bootstrap";


const Cart = (props) => {
    

    const checkoutelements = props.cartData.map(item => (
        <CheckoutCard key={item.item.id} item={item} removeItems={props.removeItems}/>
    ))

    return (
        <Container style={{display: 'flex'}}>
           {checkoutelements}
        </Container>
    )
}

export default Cart