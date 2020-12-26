import {
  //listening all users
  LISTENER_ALL_USERS_IN_PROGRESS,
  LISTENER_ALL_USERS_SUCCESS,
  LISTENER_ALL_USERS_FAILED,
} from "constants/actions";

//constant
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initialState = {
  uiStateUsers: null,
  allusers: [],
  error: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LISTENER_ALL_USERS_IN_PROGRESS:
      return {
        ...state,
        uiStateUsers: IN_PROGRESS,
        error: "",
      };

    case LISTENER_ALL_USERS_SUCCESS:
      return {
        ...state,
        uiStateUsers: SUCCESS,
        allusers: action.payload.allUsers,
        error: "",
      };
    case LISTENER_ALL_USERS_FAILED:
      return {
        ...state,
        uiStateUsers: FAILED,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default auth;
