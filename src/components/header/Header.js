import React, { useState } from "react";
import * as path from "../../constants/routes";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { logout } from "../../store/actions/logout";

const Header = (props) => {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);
  const showNavbar = () => {
    setShowNavbarMenu(!showNavbarMenu);
  };
  const closeNavbar = () => {
    setShowNavbarMenu(false);
  };

  const logoutClick = () => {
    const { logout } = props;
    window.localStorage.removeItem("auth");
    logout();
    closeNavbar();
  };

  const { profile } = props;

  return (
    <>
      <nav
        className="navbar is-fixed-top container"
        role="navigation"
        aria-label="main navigation"
      >
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
            className="navbar-burger burger button is-white"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="#"
            onClick={showNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${showNavbarMenu ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link to={path.HOME} className="navbar-item" onClick={closeNavbar}>
              Home
            </Link>
            <Link to={path.NEWS} className="navbar-item" onClick={closeNavbar}>
              News
            </Link>
            <Link
              to={path.PROFILE}
              className="navbar-item"
              onClick={closeNavbar}
            >
              Pofile
            </Link>
          </div>
          <div className="navbar-end">
            {profile ? (
              <a className="navbar-item" onClick={logoutClick} href="#">
                Logout
              </a>
            ) : (
              <Link
                to={path.SIGN_IN}
                className="navbar-item"
                onClick={closeNavbar}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className="stub" style={{ minHeight: "3.25rem" }}></div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  };
};
const mapDispatchToProps = {
  logout
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
