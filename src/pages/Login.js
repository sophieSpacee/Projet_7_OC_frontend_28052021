import React, {useState} from 'react'
import '../styles/css/style.css';
import LoginForm from '../components/LoginForm';


function Login() {
  return (
    <div className="bg-pink">
        <LoginForm/>
    </div>
  );
}

export default Login;