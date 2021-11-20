import React, {useState} from 'react'
import ProductCard from './ProductCard'

export default function Admin ({adminDelete, productList, currentUser, cartItems, setProductList}) {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [userId, setUserId] = useState('')

    console.log(productList)

    const product = productList.map((product) => {
        return(
            <div>
            <ProductCard
                key={product.id}
                product={product}
            />
            <button onClick={() => adminDelete()}>Delete</button>
            </div>
        )})
        console.log(currentUser.id)
    return(
        <div className="adminWrapper">
            <div>
                {product}
                
            </div>
            <form className="adminForm">
                <p>
                <div>
                <label className='label'>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputField"
                />
                </div>
                </p>
                <p>
                <div>
                <label className='label'>
                    user
                </label>
                <input
                    type="text"
                    name="name"
                    value={userId}
                    onChange={(e) => setUserId(currentUser.id)}
                    className="inputField"
                />
                </div>
                </p>
            </form>
        </div>
    )
}