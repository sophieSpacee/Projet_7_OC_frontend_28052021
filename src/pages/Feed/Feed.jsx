import React, { useEffect, useState, useCallback } from "react";
import "../../styles/css/style.css";
import Gif from "../../components/Gif/Gif";
import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";

const Feed = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [gifs, setGifs] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);
  
  const getGif = useCallback(() => {
    fetch("http://localhost:3001/api/gifs?page=" + page, {
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
        setTotalPages(response.total_pages);
      })
      .catch((error) => console.error(error));
  }, [page, user.token]);

  const nextPage = () => {
    setPage(page + 1);
    window.scrollTo(0, 0)
  }

  const previousPage = () => {
    setPage(page - 1);
    window.scrollTo(0, 0)
  }

  useEffect(()=> {
    getGif()
  }, [page, user.token, getGif])

  if(gifs===null){
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
        <div className="nav-button">
        {page > 0 && <span className="nav-button__previous" onClick={previousPage}>Précédent</span>}
        { page < (totalPages-1) ?  (<span className="nav-button__next" onClick={nextPage}>Suivant</span>) : (<></>)}
        </div>
       
      </section>
    </div>
  );
};

export default Feed;
