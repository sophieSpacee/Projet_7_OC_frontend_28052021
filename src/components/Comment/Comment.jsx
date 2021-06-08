import React from "react";

const Comment = ({ element }) => {
  return (
    <div className="comments">
          <div className="comments__comment-container">
            <div className="comments__comment-container__author">
              <span>{element.author.first_name + " " + element.author.last_name}</span>
              <span>{element.createdAt} </span>
            </div>
            <div className="comments__comment-container__comment">
              {element.content}
            </div>
          </div>
        </div>
  );
};

export default Comment;


