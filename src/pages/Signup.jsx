import React, {useState} from 'react'
import '../styles/css/style.css';
import SignupForm from '../components/SignupForm/SignupForm';


const Signup = () => {
  return (
    <div className="bg-pink">
        <SignupForm/>
    </div>
  );
}

export default Signup;