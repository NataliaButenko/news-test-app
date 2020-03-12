import React, { useState } from "react";
import * as path from "../constants/routes";

const LoginPage = (props) => {
  const [error, serError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    serError(false);
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    serError(false);
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "12345") {
      window.localStorage.setItem("auth", true);
      props.history.push(path.PROFILE);
    } else {
      serError(true);
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form>
        <input value={userName} onChange={handleUserName} />
        <input value={password} onChange={handlePassword} />
        <button onClick={login}>Login</button>
        {error ? <span>Error</span> : null}
      </form>
    </div>
  );
};

export default LoginPage;
