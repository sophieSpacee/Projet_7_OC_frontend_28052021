import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed/Feed";
import Signup from "./pages/Signup";
import User from "./pages/User/User";
import ProtectedRoute from "./config/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact={true} component={Login}>
          <Login />
        </Route>
        <ProtectedRoute path={"/feed"} exact={true} component={Feed}>
          <Feed />
        </ProtectedRoute>
        <Route path={"/signup"} exact={true} component={Signup}>
          <Signup />
        </Route>
        <ProtectedRoute path={"/user"} exact={true} component={User}>
          <User />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
