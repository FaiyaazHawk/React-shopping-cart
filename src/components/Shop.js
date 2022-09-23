import React from "react";
import ProductCard from "./productCard";
import '../styles/Shop.css'



const Shop = () => {
    
    const [content, setContent] = React.useState([])
    const [cart, setCart] = React.useState([])

    function addToCart(item, quantity) {
        setCart(prevCart => [...prevCart, {
            count: quantity,
            item: item
        }]  )
    }

    const fetchContent = async () => {
       await fetch("https://fakestoreapi.com/products?limit=12")
        .then(response => response.json())
        .then(data => setContent(data))
    }

    React.useEffect(() => {
        fetchContent()
        
    }, [])
    
           
    const cardElements = content.map((item) => 
        <ProductCard key={item.id} item={item} addToCart={addToCart} /> 
        )
    
    return (
        <div className="shop--page">
            {cardElements}
        </div>
    )

}

export default Shop