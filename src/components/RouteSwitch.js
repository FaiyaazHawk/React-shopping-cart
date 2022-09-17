import About from "./About";
import Shop from "./Shop";
import App from "../App";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Routes>
        </BrowserRouter>
    )

}

export default RouteSwitch;