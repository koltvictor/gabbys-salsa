import React from 'react';
import OrderCard from './OrderCard'


export default function Cart({cartItems, handleAddToCart, handleRemoveFromCart, currentUser, handleCheckout}) {
    
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * .0825;
    const shippingPrice = cartItems < 7 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;



    return(
            <div className="checkoutStart">
                <h1 className="cartHeader">{currentUser.name}'s Cart</h1>
                <div className="cartContainer">
                <div className="emptyCart">
                    {cartItems.length === 0 && <div className="emptyCart"> Cart is Empty </div> }
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cartItem"> 
                        <img src={item.image} alt={item.name} height="50" width="50"></img>
                        <br/><br/>
                        <div>{item.name}</div>
                        <br/>
                        <div>
                            <button onClick={()=>handleAddToCart(item)}> + </button>
                            <button onClick={()=>handleRemoveFromCart(item)}> - </button>
                        </div><br/>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))} 
            {cartItems.length !== 0 && (
                <div className="checkoutEnd">
                    <hr />
                    <div>
                        <div>Items Price</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                    </div>

                    <div>
                        <div>
                            <strong>Total Price</strong>
                        </div>
                        <div>${totalPrice.toFixed(2)}</div>
                    </div>

                    <hr/> 
                    
                    <div>
                        <button onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>       
                </div>
            )}
            </div>
        </div>
            )}