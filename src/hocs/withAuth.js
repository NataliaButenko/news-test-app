import React from "react";
import * as path from "../constants/routes";
import { withRouter } from "react-router";
import connect from "react-redux/es/connect/connect";

export const withAuth = (Component) => {
  const mapStateToProps = (state) => {
    return {
      profile: state.profile
    };
  };
  const PrivateRoute = (props) => {
    const { profile } = props;
    if (profile) {
      return <Component {...props} />;
    } else {
      props.history.push(path.SIGN_IN);
      return null;
    }
  };
  return withRouter(connect(mapStateToProps, null)(PrivateRoute));
};
