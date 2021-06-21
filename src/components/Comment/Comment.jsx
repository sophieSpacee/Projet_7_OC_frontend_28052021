import React from "react";
import Date from "../Date/Date";

const Comment = ({ element }) => {
  const Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="comments">
      <div className="comments__comment-container">
        <div className="comments__comment-container__author">
          <span className="author">
            {element.author === null ? (
              <span> Utilisateur supprimé </span>
            ) : (
              <span>
                {Capitalize(element.author.first_name) +
                  " " +
                  Capitalize(element.author.last_name)}
              </span>
            )}
          </span>
          <Date element={element} />
        </div>
        <div className="comments__comment-container__comment">
          {element.content}
        </div>
      </div>
    </div>
  );
};

export default Comment;
