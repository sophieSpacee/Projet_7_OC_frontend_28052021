import React from "react";
import {Redirect}  from 'react-router-dom'

const ProtectedRoute = (props) => {
    const Component = props.component;
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthentificated = user.token;
    console.log(isAuthentificated)
    if(isAuthentificated){
        console.log("dans premier if")
        return <Component/>
    } else {
        console.log("dans else")

        return <Redirect to={{pathname: '/'}}/>
    }
};

export default ProtectedRoute;
