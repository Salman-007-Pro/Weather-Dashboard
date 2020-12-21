import React from "react";
import { Route, Redirect } from "react-router-dom";

//components
import Async from "Components/Shared/Async/Async";

//moduleRoute
import ModuleRoute from "modules/ModuleRoute";

//loader
import { SUCCESS } from "constants/loader";

const PrivateRoute = () => {
  const uiState = SUCCESS;
  const error = "";
  return (
    <Async
      uiState={uiState}
      error={error}
      onSuccess={() => <ModuleRoute />}
      onFailure={() => <Redirect to="/auth/login" />}
    />
  );
};

export default PrivateRoute;
