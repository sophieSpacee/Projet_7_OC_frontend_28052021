import React from 'react'
import '../styles/css/style.css';

const Feed = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    fetch('http://localhost:3001/api/gifs', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization':'Token ' + user.token,

      },
    })
    .then((response) => {
      return response.json();
    })
    .then(response => {
      console.log(response)
  localStorage.setItem("user", JSON.stringify(response));
  console.log(localStorage)
    })
    .catch((error) => console.error(error))



  return (
   <div>This is your feed</div>
  );
}

export default Feed;
