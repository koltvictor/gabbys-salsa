import { ContactPhoneOutlined } from '@material-ui/icons'
import React from 'react'
import ProductCard from './ProductCard'

export default function Admin ({productList, currentUser, cartItems, setProductList}) {

    function adminDelete(){
        const itemExist = cartItems.find(x => x.id === product.id)
            fetch(`/api/products`, {
              method: 'DELETE',
            })
              .then(res => {
                if (res.ok) {
                  setProductList()
                }
              })
          };



    const product = productList.map((product) => {
        return(
            <ProductCard
                key={product.id}
                product={product} 
            />
        )})
    return(
        <div className="adminWrapper">
            <div>
                {product}
                <button onClick={adminDelete}>Delete</button>
            </div>
        </div>
    )
}