import React, { useState } from "react";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import "../../styles/css/style.css"
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
// import AlertMessage from "./AlertMessage";

const LoginForm = () => {
  const history = useHistory();
  const changePage = (response) => {
    if (response.code === "LOGINFAILED") {
      console.log("Login failed");
    } else {
      history.push("/feed");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    const body = {
      email: email,
      password: password,
    };
    console.log(body);
    fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        //changer avec contexte
        localStorage.setItem("user", JSON.stringify(response));
        console.log(localStorage);
        changePage(response);
      })
      .catch((error) => console.error(error));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white">
      <img src={logo} alt="logo groupomania" className="logo" />

      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Se connecter</Button>
      </Form>
      <a href="/Signup">Créez votre compte</a>
    </div>
  );
}

export default LoginForm;
