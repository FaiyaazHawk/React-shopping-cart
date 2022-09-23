import React from "react";

const CheckoutCard = (props) => {
    

    return (
        <div>
            <h1>Count: {props.item.count}</h1>
            <h1>Name: {props.item.item.title}</h1>
        </div>
    )

}

export default CheckoutCard