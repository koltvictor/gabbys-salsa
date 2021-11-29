import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

export default function UnAuth({ setCurrentUser }) {

  const [errors, setErrors] = useState(null)
  let errorsList = errors ? errors.map(e => <li key={e} className="list-group-item list-group-item-danger">{e}</li>) : <></>
  
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <LogIn 
            setCurrentUser={setCurrentUser} 
            setErrors={setErrors} 
            errorsList={errorsList}
            />
          </Route>
          <Route exact path="/signup">
              <SignUp 
              setCurrentUser={setCurrentUser}
              setErrors={setErrors} 
              errorsList={errorsList}
              />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }