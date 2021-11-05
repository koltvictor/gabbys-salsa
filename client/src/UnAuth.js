import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function UnAuth({ setCurrentUser }) {
  
    return (
      <div>
        <Switch>
          <Route exact to="/api/login">
            <LogIn setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact to="/api/signup">
            <SignUp setCurrentUser={setCurrentUser}/>
          </Route>
          <Redirect exact to="/" />
        </Switch>
      </div>
    )
  }
  
  export default UnAuth;