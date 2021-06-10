import React, { useState } from "react";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import "../../styles/css/style.css"
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const history = useHistory();

  const changePage = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        changePage();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="bg-white-signup">
      <img src={logo} alt="logo groupomania" className="logo" />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="first_name">
          <Form.Control
            placeholder="Prénom"
            className="form-field"
            type="text"
            pattern="^[a-zA-Z ,.'-]+$"
            minLength="2"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            aria-label="Prénom"

          />
        </Form.Group>
        <Form.Group controlId="last_name">
          <Form.Control
            placeholder="Nom"
            className="form-field"
            type="text"
            pattern="^[a-zA-Z ,.'-]+$"
            minLength="2"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            aria-label="nom"

          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            placeholder="email"
            className="form-field"
            type="email"
            pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$"
            title="xxxxxxx@yyyyyy.zz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="email"

          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            placeholder="Mot de passe"
            minLength="6"
            className="form-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="mot de passe"

          />
        </Form.Group>
        <Button type="submit">Créer mon compte</Button>
      </Form>
      <a className="link" href="/">Se connecter</a>
    </section>
  );
}

export default SignupForm;
