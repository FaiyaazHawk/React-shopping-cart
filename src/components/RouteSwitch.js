import React from "react";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Cart from "./Cart";
import App from "../App";
import {BrowserRouter, Routes, Route} from "react-router-dom"



const RouteSwitch = () => {
    const [cartData, setCartData] = React.useState([])
    
    
    function addToCart(item, quantity) {
        setCartData(prevCartData => [...prevCartData, {
            count: quantity,
            item: item
        }]  );
    }
    
    
    return (
        <BrowserRouter>
            <App/>
            
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/shop" element={<Shop  addToCart={addToCart}/>}/>
                    <Route path="/cart" element={<Cart  cartData={cartData}/>}/>
                </Routes>
            
        </BrowserRouter>
    )

}

export default RouteSwitch;