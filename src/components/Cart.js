import React from "react";
import CheckoutCard from "./CheckoutCard";

const Cart = ({cartData}) => {
    
    
    const [checkout, setCheckout] = React.useState(cartData)
    
    console.log(checkout)

    const checkoutelements = checkout.map(item => (
        <CheckoutCard item={item}/>
    ))

    return (
        <div>
           <h1>check console and destructure</h1> 
           {checkoutelements}
        </div>
    )
}

export default Cart