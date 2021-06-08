// import userEvent from "@testing-library/user-event";
import React, {useState} from "react";
import "../../styles/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Comment from "../Comment/Comment"

const Gif = ({element}) => {
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;
  const commentIcon = <FontAwesomeIcon icon={faComment} />;
  const [comments, setComments] = useState(null);
  if(comments === null ){
      setComments(element.comments)
  }
  console.log(element)
  return (
    <div className="bg-white-gifs">
      <div className="gif-container">
        <div className="author-container">
          <span>{element.author.first_name + " " + element.author.last_name}</span>
          <span> {element.createdAt}</span>
        </div>
        <h2> {element.title}</h2>
        <img className="gif-image" src={element.image} alt="logo"/>
        <div className="likes-container">
          <span>52 J'aime</span>
          <span>{element.comments + "commentaires"}</span>
        </div>
        <div className="button-container">
          <button className="like-button"> {heartIcon} J'aime</button>
          <button className="like-button"> {commentIcon} Je commente</button>
        </div>
        {
          comments && comments.length > 0 ?
          <>
            {
              comments.map((element, index) => 
                <Comment element={element} />
              )
            }
          </>
          :
          <div>
            No Gif yet
          </div>
        }
      </div>
    </div>
  );
};

export default Gif;
