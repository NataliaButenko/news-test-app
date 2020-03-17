import React from "react";
import { withAuth } from "../../hocs/withAuth";

const Main = (props) => {
  return <main>{props.children}</main>;
};

export default withAuth(Main);
