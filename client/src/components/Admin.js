import React, {useState} from 'react'
import ProductCard from './ProductCard'

export default function Admin ({adminDelete, productList, currentUser, cartItems, setProductList}) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [user_id, setUserId] = useState('')

    const product = productList.map((product) => {
        return(
            <div>
            <ProductCard
                key={product.id}
                product={product}
            />
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
        )})
        console.log(product)
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch('/api/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                image: image,
                description: description,
                price: price,
                user_id: currentUser.id
            }),
        })
         .then((r) => r.json())
         .then((newProduct) => setProductList([...productList, newProduct]))
    }

    function handleDelete(id) {
        fetch(`/api/products/${id}`, {
          method: 'DELETE'
        })
        .then(fetch('/admin')
          .then(resp => resp.json())
          .then(user => console.log(user)))
        
      };

    return(
        <div className="adminWrapper">
            <div className="productList">
                {product}
                
            </div><br/><br/><br/><br/><br/><br/><br/><br/>
            <form className="adminForm" onSubmit={handleSubmit}>
                <h3>Add New Product</h3>
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
                    // className="inputField"
                />
                </div>
                </p>
                
                <p>
                <div>
                <label className='label'>
                    Image URL
                </label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    // className="inputField"
                />
                </div>
                </p>
                
                <p>
                <div>
                <label className='label'>
                    Price
                </label>
                <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    // className="inputField"
                />
                </div>
                </p>

                <p>
                <div>
                <label className='label'>
                    Description
                </label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    // className="inputField"
                />
                </div>
                </p>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}