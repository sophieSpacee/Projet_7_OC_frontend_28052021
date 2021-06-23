import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import "../../styles/css/style.css";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const changePage = (response) => {
    if (response.code === "EMAILNOTUNIQUE") {
      setErrorMessage("Email déjà utilisé sur un autre compte");
    } else {
      history.push("/");
    }
  };

  // Send a sign up request when form is complete
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
        return response.json();
      })
      .then((response) => {
        changePage(response);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setErrorMessage(null);
  }, [email]);

  return (
    <section className="bg-white-signup">
      <img src={logo} alt="logo groupomania" className="logo" />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="first_name">
          <Form.Control
            placeholder="Prénom"
            className="form-field"
            type="text"
            minLength="2"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            aria-label="Prénom"
            required
          />
        </Form.Group>
        <Form.Group controlId="last_name">
          <Form.Control
            placeholder="Nom"
            className="form-field"
            type="text"
            minLength="2"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            aria-label="nom"
            required
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
            required
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
            required
          />
        </Form.Group>
        <Button type="submit">Créer mon compte</Button>
        {errorMessage && (
          <div>
            {" "}
            <p className="alert-message">{errorMessage}</p>
          </div>
        )}
      </Form>
      <a className="link" href="/">
        Se connecter
      </a>
      
    </section>
  );
};

export default SignupForm;
