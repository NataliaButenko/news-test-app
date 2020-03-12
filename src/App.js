import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import * as path from "./constants/routes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import Main from "./components/Main";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={path.HOME}>Home</Link>
              </li>
              <li>
                <Link to={path.SIGN_IN}>Login</Link>
              </li>
              <li>
                <Link to={path.NEWS}>News</Link>
              </li>
              <li>
                <Link to={path.PROFILE}>Pofile</Link>
              </li>
            </ul>
          </nav>
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
        </div>
      </Router>
    </div>
  );
}

export default App;
