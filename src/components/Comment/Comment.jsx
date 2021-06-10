import React from "react";


const Comment = ({ element }) => {
    const dateNow = new Date();
    const datePost = new Date(element.createdAt);
    let timeLaps = Math.abs(dateNow - datePost) / 1000;
    const days = Math.floor(timeLaps / 86400);
    timeLaps = timeLaps - (days * 86400);
    const hours = Math.floor(timeLaps / 3600) % 24;
    timeLaps = timeLaps -  (hours * 3600);
    const minutes = Math.floor(timeLaps/60)%60;
    timeLaps = timeLaps -  minutes * 60;
    const Capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }
    
  return (
    
    <div className="comments">
          <div className="comments__comment-container">
            <div className="comments__comment-container__author">
              <span className="author">{Capitalize(element.author.first_name) + " " + Capitalize(element.author.last_name)}</span>
              {
            days > 0 && <span className="time">Il y a  {days}  jours </span> }
           {days === 0 && hours > 0 && <span className="time">Il y a  {hours}  heures </span>} 
           {days === 0 && hours === 0 && <span className="time">Il y a  {minutes}  minutes</span>} 
            </div>
            <div className="comments__comment-container__comment">
              {element.content}
            </div>
          </div>
        </div>
  );
};

export default Comment;


