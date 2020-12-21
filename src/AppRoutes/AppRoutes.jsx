//main
import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import GMap from "Components/GMap/GMap";
import CounterTest from "Components/CounterTest/CounterTest";
import SelectForm from "Components/SelectForm/SelectForm";
import Weather from "pages/Weather/Weather";
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
      {/* <Route path="/auth" component={AuthContainer} /> */}
      {/* <Route exact path="/Weather" component={Weather} />
      <Route exact path="/" component={GMap} />
      <Route exact path="/counter" component={CounterTest} />
      <Route exact path="/SelectForm" component={SelectForm} /> */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
