import './App.css';
import Auth from './Auth';
import UnAuth from './UnAuth';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
      <Router>
        {/* <Header /> */}
        {/* {currentUser ? ( */}
          <Auth />
        {/* ) : ( */}
          {/* <UnAuth /> */}
          {/* )} */}
      </Router>
  );
}



// currentUser={currentUser} setCurrentUser={setCurrentUser}

// setCurrentUser={setCurrentUser}