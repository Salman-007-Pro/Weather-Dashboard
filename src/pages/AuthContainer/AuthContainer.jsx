//main
import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

//components
import Login from "Components/Login/Login";
import Signup from "Components/Signup/Signup";
import NotFound from "Components/Shared/NotFound/NotFound";

const AuthContainer = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={Login} />
      <Route exact path={`${match.url}/signup`} component={Signup} />
      <Route exact path={match.url} component={() => <Redirect to={`${match.url}/login`} />} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AuthContainer;
