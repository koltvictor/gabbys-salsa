import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

export default function SignUp({ setCurrentUser}) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = (e) => {
      e.preventDefault();
      setPasswordShown(!passwordShown);
    }

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            username : username,
            password : password,
            email : email,
            password_confirmation: passwordConfirmation
        })
        })
        .then(res => {
            if (res.ok) {
            res.json().then(user => {
                setCurrentUser(user)
                history.push('/')
            })
            } else {
            res.json().then(errors => {
                setError()
                console.log(errors)
            })
            }
        })
    };
    return(
        <div className="signup">
            <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <p>
                    <label className='label'>
                            Name
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        className="inputField"
                    />
                    </p>
                    <p>
                    <label className='label'>
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
                    <label className='label'>
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputField"
                    />
                    </p>

                    <p>
                    <label className='label'>
                        Password
                    </label>
                    <input
                        type={passwordShown ? 'text' : 'password'}
                        name=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputField"
                    />
                    </p>

                    <p>
                    <label className='label'>
                        Confirm Password
                    </label>
                    <input
                        type={passwordShown ? 'text' : 'password'}
                        name="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className="inputField"
                    />
                    <button onClick={togglePassword} className="togglePassword">👁️</button>
                    </p>
                    
                    <p><button type="submit" className="loginButton">Sign Up</button></p>

                    <p>-- or --</p>

                    <p><Link className="loginButton" to="/api/login">Log In</Link></p>

                </form>
            
        </div>
    )
}