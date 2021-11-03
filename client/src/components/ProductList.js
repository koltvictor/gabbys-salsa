import { useState, useEffect } from "react"

export default function ProductList () {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/products')
        .then((r) => r.json())
        .then((data) => setProductList(data))
    }, [])

    return (
        <div>
            <h2>Product List</h2>
            <div>
                {productList.map((product) => {
                    return(
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} /><br/>
                        {product.name}<br/>
                        {product.description}<br/>
                        {product.price}
                    </div>
                    )}
                )}
            </div>
        </div>
    )
}