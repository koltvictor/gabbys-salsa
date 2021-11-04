import './App.css';
import ProductList from './components/ProductList';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'

export default function Auth({ currentUser, setCurrentUser }) {

    return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/products">
                <ProductList currentUser={currentUser} />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            {/* <Route exact path="/FAQs">
                <FAQs />
            </Route> */}
            {/* <Route exact path= "/">
                <Login setCurrentUser={setCurrentUser} />
            </Route> */}
            {/* <Route exact path="/signup">
                <Signup />
            </Route> */}
            {/* <Route exact path= "/logout">
                <Logout currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route> */}
        </Switch>
    </div>
  );
}