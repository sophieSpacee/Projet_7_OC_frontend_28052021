import React, { useState } from "react";
import Button from "./Button";
import Form from "react-bootstrap/Form";
import "../styles/css/style.css";
import logo from "../assets/logo.png";
import {useHistory} from "react-router-dom"


const UserForm = () => {
    const history = useHistory()
    const changePage = () => {
            history.push("/feed")
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const userInfo = user.user;

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      first_name: first_name,
      last_name: last_name
    };
    console.log(body);
    fetch("http://localhost:3001/api/users/"+ user.userId, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization':'Token ' + user.token,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
          console.log(body)
        // changePage();
        return response.json();
         
       })

      .catch((error) => console.error(error));
  };

  const deleteProfil = () => {
    fetch("http://localhost:3001/api/users", {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token' + user.token
        },
        body: JSON.stringify(),
      })
        .then((response) => {
            console.log()
          changePage();
          return response.json();
           
         })
  
        .catch((error) => console.error(error));
  }
  
  const [first_name, setFirstName] = useState(userInfo.first_name);
  const [last_name, setLastName] = useState(userInfo.last_name);

  return (
    <div className="bg-white-user">

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="first_name">
          <Form.Control
            className="form-field"
            type="text"
            pattern="^[a-z ,.'-]+$"
            minlength="2"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="last_name">
          <Form.Control
            className="form-field"
            type="text"
            pattern="^[a-z ,.'-]+$"
            minlength="2"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
 
    
        <Button type="submit"  >Modifier</Button>
      </Form>
      <Button onClick={deleteProfil}  backgroundColor={"#FA0505"}>Supprimer le profil</Button>

 
    </div>
  );
}

export default UserForm;
