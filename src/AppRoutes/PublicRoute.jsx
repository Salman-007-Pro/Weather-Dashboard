//main
import React from "react";
import { Route, Redirect } from "react-router-dom";

//moduleRoute
import ModuleRoute from "modules/ModuleRoute";

const PublicRoute = ({ component: Component, retricated, ...rest }) => {
  const hasToken = false;
  return (
    <Route
      {...rest}
      render={(props) => (hasToken && retricated ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
