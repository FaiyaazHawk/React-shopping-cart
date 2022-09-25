import React from "react";
import { Card } from 'react-bootstrap'

const CheckoutCard = (props) => {
    

    return (
            <Card style={{width: '15rem'}}>
                <img className="img-thumbnail" src={props.item.item.image} alt={props.item.item.title}/>
                <h3>Price:{parseInt(props.item.item.price)*(parseInt(props.item.count))}</h3>
                <h3>Quantity: {props.item.count}</h3>
                <h1>{props.item.item.title}</h1>
                <p>{props.item.item.description}</p>
            </Card>
    )

}

export default CheckoutCard