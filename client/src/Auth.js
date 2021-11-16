import './App.css';

import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProductList from './components/ProductList';
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Me from './components/Me'
import Faqs from './components/Faqs'
import Cart from './components/Cart'

export default function Auth({ currentUser, setCurrentUser, previousOrders, setOrders }) {
    const [cartItems, setCartItems] = useState([])
    const [order, setOrder] = useState([])
    const history = useHistory();

    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch('/api/products')
        .then((r) => r.json())
        .then((data) => setProductList(data))
    }, [])

    function handleAddToCart(product) {
      const itemExist= cartItems.find(x => x.id === product.id)
      if (itemExist) {
          setCartItems(cartItems.map(x=> x.id === product.id ? {...itemExist, qty: itemExist.qty + 1 } : x))
      }
      else {
          setCartItems([...cartItems, {...product, qty:1}])
      }
  }

    function handleRemoveFromCart(product){
        const itemExist = cartItems.find(x => x.id === product.id)
      
        if (itemExist.qty === 1){
          setCartItems(cartItems.filter((x) => x.id !== product.id))
        }
        else {
          setCartItems(cartItems.map(x=> x.id === product.id ? {...itemExist, qty: itemExist.qty - 1 } : x))
        }
      }

//     This was to handle check out, but instead of building it all on this site, I implemented PayPal checkout API
//     function handleCheckout() {
//       fetch(`/api/cart.json`, {
//           method: 'POST',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify(cartItems)})
//           .then(resp => resp.json())
//           .then(() => setOrder(cartItems)
// )}

    const handleLogout = () => {
        fetch(`/api/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
          .then(res => {
            if (res.ok) {
              setCurrentUser(null)
              history.push('/')
            }
          })
      };
    // console.log(cartItems)
    return (
    <div>
        <Header currentUser={currentUser} handleLogout={handleLogout} countCartItems = {cartItems.length}/>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/products">
                <ProductList currentUser={currentUser} 
                handleAddToCart={handleAddToCart}
                productList={productList}
                cartItems={cartItems} />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/FAQs">
                <Faqs />
            </Route>
            <Route exact path='/me'>
                <Me 
                currentUser={currentUser}
                cartItems={cartItems}
                />
            </Route>
            <Route exact path='/cart'>
                <Cart cartItems={cartItems} 
                handleAddToCart={handleAddToCart} 
                handleRemoveFromCart={handleRemoveFromCart}
                currentUser={currentUser}
                />
            </Route>
        </Switch>
    </div>
  );
}