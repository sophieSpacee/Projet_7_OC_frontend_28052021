// import userEvent from "@testing-library/user-event";
import React from "react";
import "../../styles/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Image from "../../assets/logo.png"

const Gif = () => {
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;
  const commentIcon = <FontAwesomeIcon icon={faComment} />;
  return (
    <div className="bg-white-gifs">
      <div className="gif-container">
        <div className="author-container">
          <span>Prénom Nom</span>
          <span> date de publication</span>
        </div>
        <img className="gif-image" src={Image} alt="logo"/>
        <div className="likes-container">
          <span>52 J'aime</span>
          <span>Nombre de commentaires</span>
        </div>
        <div className="button-container">
          <button className="like-button"> {heartIcon} J'aime</button>
          <button className="like-button"> {commentIcon} Je commente</button>
        </div>
        <div className="comments">
          <div className="comments__comment-container">
            <div className="comments__comment-container__author">
              <span>Sophie</span>
              <span>il y a 12 min </span>
            </div>
            <div className="comments__comment-container__comment">
              Commentaire
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gif;
