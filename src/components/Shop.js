import React from "react";
import ProductCard from "./productCard";
import '../styles/Shop.css'



const Shop = (props) => {
    
    const [content, setContent] = React.useState([])
    

    

    const fetchContent = async () => {
       await fetch("https://fakestoreapi.com/products?limit=12")
        .then(response => response.json())
        .then(data => setContent(data))
    }

    React.useEffect(() => {
        fetchContent()
        
    }, [])

           
    const cardElements = content.map((item) => 
        <ProductCard key={item.id} item={item} addToCart={props.addToCart} retrieveData={props.retrieveData} /> 
        )
    
    return (
        <div className="shop--page">
            {cardElements}
        </div>
    )

}

export default Shop