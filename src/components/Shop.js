import React from "react";
import Card from "./Card";

const Shop = () => {
    const [content, setContent] = React.useState([])


    const fetchContent = async () => {
       await fetch("https://fakestoreapi.com/products?limit=5")
        .then(response => response.json())
        .then(data => setContent(data))
    }

    React.useEffect(() => {
        fetchContent()
        
    }, [])
    
   
 
        
        


    const cardElements = content.map((item) => 
        <Card key={item.id} item={item}/> 
        )
    
    return (
        <div>
            <h2>Welcome to the Shop</h2>
            {cardElements}
        </div>
    )

}

export default Shop