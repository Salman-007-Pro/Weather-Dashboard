import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Redirect } from "react-router-dom";

//components
import Async from "Components/Shared/Async/Async";

//moduleRoute
import ModuleRoute from "modules/ModuleRoute";

//firebase instance
import firebase from "FirebaseConfig/config";

//actions
import Actions from "redux/actions";

const {
  //check auth
  checkAuthInProgress,
  checkAuthFailed,
} = Actions;

const PrivateRoute = ({ checkAuth, Auth, AuthFailed }) => {
  // const dispatch = useDispatch();
  // const { uiStateAuth, error, isAuth } = useSelector((state) => state.Auth);
  const { uiStateAuth, error, isAuth } = Auth;
  useEffect(() => {
    const AuthObserver = firebase.auth().onAuthStateChanged(function (user) {
      if (user) checkAuth(user);
      else AuthFailed("not valid user");
    });
    return () => {
      console.log("offline");
      AuthObserver();
    };
  }, []);
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
    checkAuth: (user) => dispatch(checkAuthInProgress(user)),
    AuthFailed: (err) => dispatch(checkAuthFailed(err)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
