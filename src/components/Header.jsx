import React from 'react';
import logo4 from '../assets/logo4.png'
import "../styles/css/style.css"
import people from "../assets/people.png"

const Header = ()=> {
    
   return <div className="header">
        <a href="/feed">
        <img src={logo4} alt="logo groupomania" className="logoHeader" />
            </a> 
            <a href="/user">
            <img src={people} alt="icone people" className="icone-header"/>
            </a>
   </div>

       
}

export default Header;