import React, { useState } from "react";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import "../../styles/css/style.css";
import { useHistory } from "react-router-dom";

const UserForm = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const [first_name, setFirstName] = useState(user.user.first_name);
  const [last_name, setLastName] = useState(user.user.last_name);
  
  const changePage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      history.push("/feed");
    } else {
      history.push("/");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      first_name: first_name,
      last_name: last_name,
    };
    fetch("http://localhost:3001/api/users/" + user.userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Token " + user.token,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        user.user.first_name = first_name;
        user.user.last_name = last_name;
        localStorage.setItem("user", JSON.stringify(user));
        changePage();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  const deleteProfil = () => {
    fetch("http://localhost:3001/api/users/" + user.userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + user.token,
      },
    })
      .then((response) => {
        localStorage.clear();
        changePage();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  const disconnect = () => {
    localStorage.clear();
    changePage();
  };

  return (
    <section className="bg-white-user">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="first_name">
          <Form.Control
            className="form-field"
            type="text"
            pattern="^[a-zA-Z ,.'-]+$"
            minLength="2"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            aria-label="prénom"
          />
        </Form.Group>
        <Form.Group controlId="last_name">
          <Form.Control
            className="form-field"
            type="text"
            pattern="^[a-zA-Z ,.'-]+$"
            minLength="2"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            aria-label="nom"
          />
        </Form.Group>

        <Button type="submit">Modifier le profil</Button>
      </Form>
      <Button
        type="button"
        onClick={disconnect}
        backgroundColor={"transparent"}
        marginTop={10}
        border={"2px solid #736D6D"}
        color={"#736D6D"}
      >
        Se déconnecter
      </Button>
      <Button
        type="button"
        onClick={deleteProfil}
        backgroundColor={"#FA0505"}
        marginTop={10}
      >
        Supprimer le profil
      </Button>
    </section>
  );
};

export default UserForm;
