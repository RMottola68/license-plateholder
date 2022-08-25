import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router"

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [plate, setPlate] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  function handleSubmit2(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }


 

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        plate, 
        state, 
        image 
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="plate">Add Your Plate</label>
        <input 
        type="text"
        id="plate"
        value={plate}
        onChange={(e) => setPlate(e.target.value)}
        autoComplete="off"
        />
        <label htmlFor="state">What State are you From?</label>
        <input 
        type="text"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
        autoComplete="off"
        />
        <label htmlFor="image">Show Us Your Car!</label>
        <input 
        type="text"
        id="state"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        autoComplete="off"
        />
        <button type="submit" >Sign Up</button>
      </form>



      <form onSubmit={handleSubmit2}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;