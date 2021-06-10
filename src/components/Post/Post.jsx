import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../Button/Button";
import "../../styles/css/style.css";
import people from "../../assets/people.png";

const Post = () => {
  const [title, setTitle] = useState("");
  const [gif, setGif] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const errHandler = (response) => {
    if (response.code === "MISSINGFIELDS") {
      console.log("missing fields");
    }
    if (response.code === "WRONGFORMAT") {
      console.log("wrong format");
    } else {
      console.log("pas d'erreur");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        errHandler(response);
        window.location.reload(false);
      })
      .catch((error) => console.error(error));
  };

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    event.preventDefault()
    console.log("click");
    hiddenFileInput.current.click();
    console.log("after click")
  };

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
            />
          </Form.Group>
          <div className="center">
            <Form.Group controlId="gif">
              <button className="post__upload" onClick={handleClick}>
                {gif ? (
                  <img
                    className="image-preview"
                    alt="your uploaded file"
                    src={URL.createObjectURL(gif)}
                  ></img>
                ) : (
                  "Téléchargez votre image"
                )}
              </button>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={(e) => setGif(e.target.files[0])}
                style={{ display: "none" }}
              />
            </Form.Group>

            <Button type="submit" marginTop="20px" marginBottom="0px">
              Publier
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Post;
