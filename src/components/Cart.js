import React from "react";
import CheckoutCard from "./CheckoutCard";
import { Container } from "react-bootstrap";

const Cart = ({cartData, retrieveData}) => {
    
    
    const [checkout, setCheckout] = React.useState(cartData)
    

    React.useEffect(() => {
        retrieveData()
        setCheckout(cartData)
        
    }, [checkout])

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