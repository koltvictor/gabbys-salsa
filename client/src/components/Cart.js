import React from 'react';
import ReactDOM from 'react-dom';


export default function Cart({cartItems, handleAddToCart, handleRemoveFromCart, currentUser, items}) {
    
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0)
    // const taxPrice = itemsPrice * .0825;
    const shippingPrice = cartItems < 7 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice;

    console.log(items)

    let map = [items].map((item) => {
        console.log(item)
    })

    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalPrice,
              },
            },
          ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture();
    };
    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
    
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
                    
                    <div className="payPalButton">
                        <PayPalButton 
                            createOrder={(data, actions) => createOrder(data, actions)}
                            onApprove={(data, actions) => onApprove(data, actions)}
                            totalPrice={totalPrice}
                        />
                    </div>       
                </div>
            )}
            </div>
        </div>
            )}