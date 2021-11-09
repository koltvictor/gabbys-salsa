import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

export default function UnAuth({ setCurrentUser }) {
  
    return (
      <div>
        <Switch>
          <Route to="/api/login">
            <LogIn setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/api/signup">
              <SignUp setCurrentUser={setCurrentUser}/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }