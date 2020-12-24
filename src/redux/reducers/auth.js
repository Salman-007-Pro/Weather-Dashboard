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

//constant
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initialState = {
  uiStateSignup: null,
  uiStatelogin: null,
  uiStateAuth: null,
  uiStateLogout: null,
  user: {},
  isAuth: false,
  error: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_IN_PROGRESS:
      return {
        ...state,
        uiStateSignup: IN_PROGRESS,
        error: "",
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        uiStateSignup: SUCCESS,
        user: action.payload.user,
        error: "",
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        uiStateSignup: FAILED,
        error: action.payload.error,
      };

    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        uiStatelogin: IN_PROGRESS,
        error: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        uiStatelogin: SUCCESS,
        user: action.payload.user,
        error: "",
      };
    case LOGIN_FAILED:
      return {
        ...state,
        uiStatelogin: FAILED,
        error: action.payload.error,
      };

    case CHECK_AUTH_IN_PROGRESS:
      return {
        ...state,
        uiStateAuth: IN_PROGRESS,
        error: "",
      };

    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        uiStateAuth: SUCCESS,
        isAuth: action.payload.isAuth,
        error: "",
      };
    case CHECK_AUTH_FAILED:
      return {
        ...state,
        uiStateAuth: FAILED,
        isAuth: false,
        error: action.payload.error,
      };

    case LOGOUT_IN_PROGRESS:
      return {
        ...state,
        uiStateLogout: IN_PROGRESS,
        error: "",
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        uiStateLogout: SUCCESS,
        isAuth: false,
        error: "",
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        uiStateLogout: FAILED,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default auth;