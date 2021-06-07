import React, { useState } from "react";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import "../../styles/css/style.css"
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const history = useHistory();
  const changePage = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    const body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };
    console.log(body);
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  return (
    <div className="bg-white-signup">
      <img src={logo} alt="logo groupomania" className="logo" />

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="first_name">
          <Form.Control
            placeholder="Prénom"
            className="form-field"
            type="text"
            pattern="^[a-z ,.'-]+$"
            minLength="2"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="last_name">
          <Form.Control
            placeholder="Nom"
            className="form-field"
            type="text"
            pattern="^[a-z ,.'-]+$"
            minLength="2"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
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
          />
        </Form.Group>
        <Button type="submit">Créer mon compte</Button>
      </Form>
      <a href="/">Se connecter</a>
    </div>
  );
}

export default SignupForm;
