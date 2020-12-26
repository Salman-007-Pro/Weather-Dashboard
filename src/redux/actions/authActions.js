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

  //facebook login
  FACEBOOK_LOGIN_IN_PROGRESS,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAILED,

  //google login
  GOOGLE_LOGIN_IN_PROGRESS,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILED,

  //github login
  GITHUB_LOGIN_IN_PROGRESS,
  GITHUB_LOGIN_SUCCESS,
  GITHUB_LOGIN_FAILED,
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

//facebook login
export const facebookLoginInProgress = () => {
  return {
    type: FACEBOOK_LOGIN_IN_PROGRESS,
    payload: {},
  };
};

export const facebookLoginSuccess = (user) => {
  return {
    type: FACEBOOK_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const facebookLoginFailed = (error) => {
  return {
    type: FACEBOOK_LOGIN_FAILED,
    payload: { error },
  };
};

//google login
export const googleLoginInProgress = () => {
  return {
    type: GOOGLE_LOGIN_IN_PROGRESS,
    payload: {},
  };
};

export const googleLoginSuccess = (user) => {
  return {
    type: GOOGLE_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const googleLoginFailed = (error) => {
  return {
    type: GOOGLE_LOGIN_FAILED,
    payload: { error },
  };
};

//github login
export const githubLoginInProgress = () => {
  return {
    type: GITHUB_LOGIN_IN_PROGRESS,
    payload: {},
  };
};

export const githubLoginSuccess = (user) => {
  return {
    type: GITHUB_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const githubLoginFailed = (error) => {
  return {
    type: GITHUB_LOGIN_FAILED,
    payload: { error },
  };
};
