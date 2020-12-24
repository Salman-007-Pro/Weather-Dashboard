import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import NotFound from "Components/Shared/NotFound/NotFound";
import MainView from "modules/Admin/views/MainView/MainView";

const AdminRouter = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/adminPanel" />
      <Route exact path="/adminPanel" component={MainView} />
      <Route exact path="/" render={() => <div>asdsa</div>} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AdminRouter;
