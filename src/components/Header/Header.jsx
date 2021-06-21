import React from "react";
import logo4 from "../../assets/logo4.png";
import "../../styles/css/style.css";
import people from "../../assets/people.png";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <header className="header">
      <a href="/feed">
        <img src={logo4} alt="logo groupomania" className="logoHeader" />
      </a>
      <div className="welcome">
        Bonjour
        {" " +
          Capitalize(user.user.first_name) +
          " " +
          Capitalize(user.user.last_name)}
      </div>
      <a href="/user">
        <img src={people} alt="icone people" className="icone-header" />
      </a>
    </header>
  );
};

export default Header;
