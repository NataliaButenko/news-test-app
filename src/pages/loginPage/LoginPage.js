import React, { useState } from "react";
import * as path from "../../constants/routes";
import connect from "react-redux/es/connect/connect";
import "./stylesLoginPage.css";
import { login } from "../../store/actions/login";

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
    const { login } = props;
    if (userName === "admin" && password === "12345") {
      window.localStorage.setItem("auth", true);
      login();
      props.history.push(path.PROFILE);
    } else {
      serError(true);
    }
  };

  return (
    <div className="container is-widescreen hero is-fullheight login_wrapper">
      <div className="card login_card">
        <div className="card-content">
          <p className="card-header-title is-centered">Login</p>
          <form>
            <div className="field">
              <div className="control">
                <input
                  className={`input is-medium ${error ? "is-danger" : ""}`}
                  type="text"
                  placeholder="name"
                  value={userName}
                  onChange={handleUserName}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={`input is-medium ${error ? "is-danger" : ""}`}
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
            </div>
            {error ? (
              <span className="error">
                The username or password you entered is incorrect
              </span>
            ) : null}
          </form>
        </div>
        <footer className="card-footer login_card_footer">
          <button className="button is-primary" onClick={login}>
            Login
          </button>
        </footer>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  login
};
export default connect(null, mapDispatchToProps)(LoginPage);
