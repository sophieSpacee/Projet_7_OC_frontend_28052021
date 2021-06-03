import React from 'react';
import {
  BrowserRouter as Router,
  Route
}
from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Signup from './pages/Signup';
import User from './pages/User';

function App() {
  return(
    <Router>
      <Route path={'/'} exact={true}>
        <Login/>
      </Route>
      <Route path={'/feed'} exact={true}>
        <Feed/>
      </Route>
      <Route path={'/signup'} exact={true}>
        <Signup/>
      </Route>
      <Route path={'/user'} exact={true}>
        <User/>
      </Route>
    </Router>
  )
}

export default App;