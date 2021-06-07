import userEvent from "@testing-library/user-event";
import React from "react";
import "../../styles/css/style.css";
import Header from "../Header/Header";

const Gif = () => {
  return (
    <div className="gifs-container">
      <div className="gif-container">
        <div className="author-container">
          <span >Prénom Nom</span>
          <span> date de publication</span>
        </div>

        <img src="../../assets/logo.png" />
        <div className="likes-container">
          <span>52 J'aime</span>
          <span>Nombre de commentaires</span>
        </div>
        <div className="button-container">
          <span><img src="../../assets/message.png" alt="icone commentaire"/></span><button className="like-button">J'aime</button>
          <button className="like-button">Je commente</button>
        </div>
      </div>
    </div>
  );
};

export default Gif;
