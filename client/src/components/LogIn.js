import React, { useState } from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'


export default function LogIn({ setCurrentUser }) {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(r => {
        if (r.ok) {
          r.json().then(user => {
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          r.json().then(errors => {
            alert(errors.full_messages)
          })
        }
      })
  };

  return (
    <div className="login">

      <Redirect to='/' />

      <form onSubmit={handleSubmit}>
        
        <h1 className="loginHeader">Log In</h1>
        <div className="loginForm">
        <p>
          <label className="label">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputField"
          />
        </p>

        <p>
          <label className="label">          
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
          />
        </p>
        <button className="loginButton" type="submit">Log In</button>
        <br/><br/>
        <hr/>
        <br/>
        <Link className="loginButton" to="/signup">Sign Up</Link><br/><br/>
        </div>
        

      </form>

    </div>
  );
}