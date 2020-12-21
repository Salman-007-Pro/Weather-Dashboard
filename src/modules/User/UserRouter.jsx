//main
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import NotFound from "Components/Shared/NotFound/NotFound";
import MainView from "modules/User/views/MainView/MainView";

const UserRouter = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/userPanel" />
      <Route path="/userPanel" component={MainView} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default UserRouter;
