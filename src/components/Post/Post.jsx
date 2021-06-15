import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "../Button/Button";
import "../../styles/css/style.css";
import people from "../../assets/people.png";

const Post = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [gif, setGif] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [errorMessage, setErrorMessage] = useState(null);

  // Send request to post a gif if all fields are correctly filled
  const handleSubmit = (event) => {
    event.preventDefault();
    if (gif === null && title !== null) {
      setErrorMessage("Veuillez ajouter une image ou un gif svp ");
      return false;
    }
    if (gif !== null && gif.size > 926148) {
      setErrorMessage("Taille maximale autorisée : 930 Ko ");
    } else {
      const formData = new FormData();
      const userId = user.userId;
      formData.append("image", gif);
      formData.append("title", title);
      formData.append("userId", userId);
      fetch("http://localhost:3001/api/gifs", {
        method: "POST",
        headers: {
          authorization: "Token " + user.token,
        },
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          onAdd();
          setGif(null);
          setTitle("");
        })
        .catch((error) => console.error(error));
    }
  };

  // Hide file input and replace it with customized button
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    setErrorMessage(null);
  }, [gif, title]);

  return (
    <div className="bg-white-post">
      <div className="post">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <div className="post__image-container">
              <img src={people} alt="icone people" className="post__icon" />{" "}
            </div>
            <Form.Control
              placeholder="Une blague à partager ? "
              className="post__textarea"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              aria-label="Titre de votre publication"
            />
          </Form.Group>
          <div className="center">
            <Form.Group controlId="gif">
              <button className="post__upload" onClick={handleClick}>
                {gif ? (
                  <img
                    className="image-preview"
                    alt="votre gif"
                    src={URL.createObjectURL(gif)}
                  ></img>
                ) : (
                  "Téléchargez votre gif"
                )}
              </button>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={(e) => setGif(e.target.files[0])}
                style={{ display: "none" }}
                aria-label="Votre image ou gif à télécharger"
              />
            </Form.Group>

            <Button type="submit" marginTop="20px" marginBottom="0px">
              Publier
            </Button>
            {errorMessage && (
              <p className="alert-message-size">{errorMessage}</p>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Post;
