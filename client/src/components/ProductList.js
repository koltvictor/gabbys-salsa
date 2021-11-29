import React from "react"
import ProductCard from "./ProductCard"


export default function ProductList ({productList, handleAddToCart}) {

    const product = productList.map((product) => {
        return(
            <ProductCard
                key={product.id}
                product={product} 
                handleAddToCart={handleAddToCart} />
            
        )})

    return (
        <div className="productWrapper">
            <div className="productHeader">Salsas available for purchase </div>
            <div className="productList">
                {product}
            </div>
            <img className="productsImg" src="https://images.sks-bottle.com/images/SalsaJars.jpg" alt="salsa jar"/>
        </div>
    )
}