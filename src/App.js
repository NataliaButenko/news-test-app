import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import * as path from "./constants/routes";
import { BrowserRouter as Router} from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import NewsPage from "./pages/newsPage/NewsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
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

export default App;
