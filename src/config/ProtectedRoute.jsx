import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.token) {
    return <Component />;
  } else {
    return <Redirect to={{ pathname: "/" }} />;
  }
};

export default ProtectedRoute;
