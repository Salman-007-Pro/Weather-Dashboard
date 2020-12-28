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

  //subscription
  SUBSCRIPTION_IN_PROGRESS,
  SUBSCRIPTION_SUCCESS,
  SUBSCRIPTION_FAILED,

  //unsubscribe
  UNSUBSCRIBE_IN_PROGRESS,
  UNSUBSCRIBE_SUCCESS,
  UNSUBSCRIBE_FAILED,
} from "constants/actions";

//constant
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initialState = {
  uiStateSignup: null,
  uiStatelogin: null,
  uiStateAuth: null,
  uiStateLogout: null,
  uiStateSocialLogin: null,
  uiStateSubscription: null,
  uiStateUnsubscription: null,
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
        uiStateAuth: IN_PROGRESS,
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
        uiStateSocialLogin: null,
        error: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        uiStateAuth: IN_PROGRESS,
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
        user: action.payload.user,
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
        ...initialState,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        uiStateLogout: FAILED,
        error: action.payload.error,
      };

    case FACEBOOK_LOGIN_IN_PROGRESS:
      return {
        ...state,
        uiStateSocialLogin: IN_PROGRESS,
        error: "",
      };

    case FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        uiStateSocialLogin: SUCCESS,
        user: action.payload.user,
        error: "",
      };
    case FACEBOOK_LOGIN_FAILED:
      return {
        ...state,
        uiStateSocialLogin: FAILED,
        error: action.payload.error,
      };

    case GOOGLE_LOGIN_IN_PROGRESS:
      return {
        ...state,
        uiStateSocialLogin: IN_PROGRESS,
        error: "",
      };

    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        uiStateSocialLogin: SUCCESS,
        user: action.payload.user,
        error: "",
      };
    case GOOGLE_LOGIN_FAILED:
      return {
        ...state,
        uiStateSocialLogin: FAILED,
        error: action.payload.error,
      };

    case GITHUB_LOGIN_IN_PROGRESS:
      return {
        ...state,
        uiStateSocialLogin: IN_PROGRESS,
        error: "",
      };

    case GITHUB_LOGIN_SUCCESS:
      return {
        ...state,
        uiStateSocialLogin: SUCCESS,
        user: action.payload.user,
        error: "",
      };
    case GITHUB_LOGIN_FAILED:
      return {
        ...state,
        uiStateSocialLogin: FAILED,
        error: action.payload.error,
      };

    case SUBSCRIPTION_IN_PROGRESS:
      return {
        ...state,
        uiStateSubscription: IN_PROGRESS,
        error: "",
      };

    case SUBSCRIPTION_SUCCESS:
      console.log(action.payload.subscription);
      return {
        ...state,
        uiStateSubscription: SUCCESS,
        user: {
          ...state.user,
          subscription: action.payload.subscription,
        },
        error: "",
      };
    case SUBSCRIPTION_FAILED:
      return {
        ...state,
        uiStateSubscription: FAILED,
        error: action.payload.error,
      };

    case UNSUBSCRIBE_IN_PROGRESS:
      return {
        ...state,
        uiStateUnsubscription: IN_PROGRESS,
        error: "",
      };

    case UNSUBSCRIBE_SUCCESS:
      console.log(action.payload.subscription);
      return {
        ...state,
        uiStateUnsubscription: SUCCESS,
        user: {
          ...state.user,
          subscription: action.payload.subscription,
        },
        error: "",
      };
    case UNSUBSCRIBE_FAILED:
      return {
        ...state,
        uiStateUnsubscription: FAILED,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default auth;
