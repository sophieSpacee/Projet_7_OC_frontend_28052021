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
  const dateNow = new Date();
  console.log(dateNow);
  const datePost = new Date(element.createdAt);
  console.log(datePost)
  let timeLaps = Math.abs(dateNow - datePost) / 1000;
  const days = Math.floor(timeLaps / 86400);
  timeLaps = timeLaps - (days * 86400);
  const hours = Math.floor(timeLaps / 3600) % 24;
  timeLaps = timeLaps -  (hours * 3600);
  const minutes = Math.floor(timeLaps/60)%60;
  timeLaps = timeLaps -  minutes * 60;
  console.log(timeLaps)
  console.log(days, hours, minutes)
  if(comments === null ){
      setComments(element.comments)
  }
  console.log(element)
  return (
    <div className="bg-white-gifs">
      <div className="gif-container">
        <div className="author-container">
          <span>{element.author.first_name + " " + element.author.last_name}</span>
         {
            days > 0 && <span>Il y a  {days}  jours </span> }
           {days === 0 && hours > 0 && <span>Il y a  {hours}  heures </span>} 
           {days === 0 && hours === 0 && <span>Il y a  {minutes}  minutes</span>} 
            
        </div>
        <h2 className="titre2"> {element.title}</h2>
        <img className="gif-image" src={element.image} alt="logo"/>
        <div className="likes-container">
          <span>{element.likes} J'aime</span>
          <span>{element.comments.length } commentaires</span>
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
