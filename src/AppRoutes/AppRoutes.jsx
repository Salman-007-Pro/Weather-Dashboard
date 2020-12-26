//main
import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import NotFound from "Components/Shared/NotFound/NotFound";

//routes
import PrivateRoute from "AppRoutes/PrivateRoute";
import PublicRoute from "AppRoutes/PublicRoute";
import AuthContainer from "pages/AuthContainer/AuthContainer";

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoute path="/auth" retricated={true} component={AuthContainer} />
      <Route path="/" component={PrivateRoute} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
