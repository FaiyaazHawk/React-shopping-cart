import React from "react";
import CheckoutCard from "./CheckoutCard";
import { Container } from "react-bootstrap";


const Cart = ({cartData}) => {
    
    
    
    const [checkout, setCheckout] = React.useState(cartData)
     

    const checkoutelements = checkout.map(item => (
        <CheckoutCard key={item.item.id} item={item}/>
    ))

    return (
        <Container style={{display: 'flex'}}>
           {checkoutelements}
        </Container>
    )
}

export default Cart