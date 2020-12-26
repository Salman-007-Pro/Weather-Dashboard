import {
  //listening all users
  LISTENER_ALL_USERS_IN_PROGRESS,
  LISTENER_ALL_USERS_SUCCESS,
  LISTENER_ALL_USERS_FAILED,
  LISTENER_ALL_USERS_CANCEL,
} from "constants/actions";

//listening all users
export const listeningAllUsersInProgress = () => {
  return {
    type: LISTENER_ALL_USERS_IN_PROGRESS,
    payload: {},
  };
};

export const listeningAllUsersSuccess = (allUsers) => {
  return {
    type: LISTENER_ALL_USERS_SUCCESS,
    payload: {
      allUsers,
    },
  };
};

export const listeningAllUsersFailed = (error) => {
  return {
    type: LISTENER_ALL_USERS_FAILED,
    payload: { error },
  };
};
export const listeningAllUsersCancel = () => {
  return {
    type: LISTENER_ALL_USERS_CANCEL,
  };
};
