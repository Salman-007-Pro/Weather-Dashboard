//main
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, retricated, ...rest }) => {
  const { isAuth } = useSelector((state) => state.Auth);
  return (
    <Route
      {...rest}
      render={(props) => (isAuth && retricated ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
