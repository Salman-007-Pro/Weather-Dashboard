import {
  //sign up
  SIGN_UP_IN_PROGRESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,

  //login
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  //check auth
  CHECK_AUTH_IN_PROGRESS,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILED,

  //logout
  LOGOUT_IN_PROGRESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "constants/actions";

// export const fakeAuth = {
//   isAuthenticated: false,
//   role: "Admin",
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
// };

//get sign up
export const signupInProgress = (email, password, name) => {
  return {
    type: SIGN_UP_IN_PROGRESS,
    payload: {
      email,
      password,
      name,
    },
  };
};

export const signupSuccess = (user) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      user,
    },
  };
};

export const signupFailed = (error) => {
  return {
    type: SIGN_UP_FAILED,
    payload: { error },
  };
};

//get login
export const loginInProgress = (email, password) => {
  return {
    type: LOGIN_IN_PROGRESS,
    payload: {
      email,
      password,
    },
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: { error },
  };
};

//check auth
export const checkAuthInProgress = () => {
  return {
    type: CHECK_AUTH_IN_PROGRESS,
    payload: {},
  };
};

export const checkAuthSuccess = (isAuth) => {
  return {
    type: CHECK_AUTH_SUCCESS,
    payload: {
      isAuth,
    },
  };
};

export const checkAuthFailed = (error) => {
  return {
    type: CHECK_AUTH_FAILED,
    payload: { error },
  };
};

//logout
export const logoutInProgress = () => {
  return {
    type: LOGOUT_IN_PROGRESS,
    payload: {},
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {},
  };
};

export const logoutFailed = (error) => {
  return {
    type: LOGOUT_FAILED,
    payload: { error },
  };
};
