import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import "../../styles/css/style.css"
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)


  const changePage = (response) => {
    if (response.code === "LOGINFAILED") {
      console.log("Login failed");
      setErrorMessage("Login failed.");
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

  useEffect(() => {
    setErrorMessage(null)
  }, [email, password]);


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
        <Button type="submit" className="bouton" marginBottom="10px">Se connecter</Button>
        {
          errorMessage &&
          <p className="alert-message" >
            {errorMessage}
          </p>
        }
      </Form>
      <a className="link" href="/Signup">Créez votre compte</a>
    </div>
  );
}

export default LoginForm;
