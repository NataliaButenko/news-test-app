import React from "react";
import * as path from "../constants/routes";
import { withRouter } from "react-router";

export const withAuth = (Component) => {
  const PrivateRoute = (props) => {
    const isLogin = window.localStorage.getItem("auth");
    if (isLogin) {
      return <Component {...props} />;
    } else {
      props.history.push(path.SIGN_IN);
      return null;
    }
  };
  return withRouter(PrivateRoute);
};
