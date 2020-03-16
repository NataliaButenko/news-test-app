import React, { Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import connect from "react-redux/es/connect/connect";
import * as path from "./constants/routes";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import NewsPage from "./pages/newsPage/NewsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Main from "./components/Main";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import { login } from "./store/actions/login";
import { logout } from "./store/actions/logout";

function App(props) {
  useEffect(() => {
    const { login, logout } = props;
    let auth = window.localStorage.getItem("auth");
    return auth ? login() : logout;
  }, [props]);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/" to={path.HOME} />
          <Route exact path={path.SIGN_IN} component={LoginPage} />
          <Route exact path={path.HOME} component={HomePage} />
          <Route exact path={path.NEWS} component={NewsPage} />
          <Main>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path={path.PROFILE} component={ProfilePage} />
              </Switch>
            </Suspense>
          </Main>
        </Switch>
      </Router>
    </>
  );
}

const mapDispatchToProps = {
  login,
  logout
};

export default connect(null, mapDispatchToProps)(App);
