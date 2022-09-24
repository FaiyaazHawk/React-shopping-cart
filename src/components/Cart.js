import React from "react";
import CheckoutCard from "./CheckoutCard";
import { Container } from "react-bootstrap";

const Cart = ({cartData}) => {
    
    
    const [checkout, setCheckout] = React.useState(cartData)
    
    console.log(checkout)

    const checkoutelements = checkout.map(item => (
        <CheckoutCard item={item}/>
    ))

    return (
        <Container style={{display: 'flex'}}>
           {checkoutelements}
        </Container>
    )
}

export default Cart