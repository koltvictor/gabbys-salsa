import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

export default function UnAuth({ setCurrentUser }) {
  
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <LogIn setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/signup">
              <SignUp setCurrentUser={setCurrentUser}/>
          </Route>
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    )
  }