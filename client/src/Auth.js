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

export default function Auth({ currentUser, setCurrentUser }) {
    const [cartItems, setCartItems] = useState([])
    const history = useHistory();

    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/products')
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
                <Me currentUser={currentUser} cartItems={cartItems}/>
            </Route>
            <Route exact path='/cart'>
                <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
            </Route>
        </Switch>
    </div>
  );
}