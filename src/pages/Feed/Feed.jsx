import React from "react";
import "../../styles/css/style.css";
import Gif from "../../components/Gif/Gif";
import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";

const Feed = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  fetch("http://localhost:3001/api/gifs", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Token " + user.token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));

  return (
    <div className="bg-pink">
      <Header />
      <div className="feed">
        <Post />
        <Gif />
      </div>
    </div>
  );
};

export default Feed;
