import React, { useState } from "react";
import "../../styles/css/style.css";
import Gif from "../../components/Gif/Gif";
import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";

const Feed = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [gifs, setGifs] = useState(null);
  
  const getGif = () => {
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
        setGifs(response.gifs);
      })
      .catch((error) => console.error(error));
  };

  if (gifs === null) {
    getGif();
  }

  return (
    <div className="bg-pink">
      <Header />
      <section className="feed">
        <Post onAdd={getGif} />
        <h1 className="titre">Le fil d'actualité</h1>
        {gifs && gifs.length > 0 ? (
          <>
            {gifs.map((element, key) => (
              <Gif element={element} key={element.id} onDelete={getGif} />
            ))}
          </>
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
};

export default Feed;
