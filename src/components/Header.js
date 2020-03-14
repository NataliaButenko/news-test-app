import React from "react";
import * as path from "../constants/routes";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to={path.HOME} className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="logo"
            />
          </Link>

          <button
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to={path.HOME} className="navbar-item">
              Home
            </Link>
            <Link to={path.SIGN_IN} className="navbar-item">
              Login
            </Link>
            <Link to={path.NEWS} className="navbar-item">
              News
            </Link>
            <Link to={path.PROFILE} className="navbar-item">
              Pofile
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to={path.SIGN_IN} className="button is-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
