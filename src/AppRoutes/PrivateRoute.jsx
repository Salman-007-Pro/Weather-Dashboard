import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Redirect } from "react-router-dom";

//components
import Async from "Components/Shared/Async/Async";

//moduleRoute
import ModuleRoute from "modules/ModuleRoute";

//actions
import Actions from "redux/actions";

const {
  //check auth
  checkAuthInProgress,
} = Actions;

const PrivateRoute = ({ checkAuth, Auth }) => {
  // const dispatch = useDispatch();
  // const { uiStateAuth, error, isAuth } = useSelector((state) => state.Auth);
  const { uiStateAuth, error, isAuth } = Auth;
  useEffect(
    // dispatch(checkAuthInProgress());
    checkAuth,
    [isAuth]
  );

  return (
    <Async
      uiState={uiStateAuth}
      error={error}
      onSuccess={() => <ModuleRoute />}
      onFailure={() => <Redirect to="/auth/login" />}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    Auth: state.Auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuthInProgress()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
