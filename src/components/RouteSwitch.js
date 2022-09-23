import React from "react";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Cart from "./Cart";
import App from "../App";
import {BrowserRouter, Routes, Route} from "react-router-dom"



const RouteSwitch = () => {
    
    
    return (
        <BrowserRouter>
            <App/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/shop" element={<Shop  />}/>
                <Route path="/cart" element={<Cart  />}/>
            </Routes>
        </BrowserRouter>
    )

}

export default RouteSwitch;