import { takeLatest, put, call, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import _ from "lodash";

//firebase instance
import firebase from "FirebaseConfig/config";

//actions
import Actions from "redux/actions";

//constants
import {
  //listening all users
  LISTENER_ALL_USERS_IN_PROGRESS,
  LISTENER_ALL_USERS_CANCEL,
} from "constants/actions";

const {
  //listening users
  listeningAllUsersSuccess,
  listeningAllUsersFailed,
} = Actions;

const db = firebase.firestore();
let channel;

function usersEventChannel() {
  const listener = new eventChannel((emit) => {
    const subscriber = db.collection("users").onSnapshot(
      (QuerySnapshot) => {
        const arr = QuerySnapshot.docs.map((el) => el.data());
        emit(arr);
      },
      (err) => emit(err)
    );
    return () => {
      subscriber();
    };
  });
  return listener;
}

function* listeningUsers() {
  try {
    channel = yield call(usersEventChannel);
    while (true) {
      const allUsers = yield take(channel);
      yield put(listeningAllUsersSuccess(allUsers));
    }
  } catch (err) {
    console.log(err);
    yield put(listeningAllUsersFailed(err));
  }
}

function* cancelListeningUsers() {
  try {
    yield channel.close();
  } catch (err) {
    console.log(err);
  }
}

function* usersWatcher() {
  yield takeLatest(LISTENER_ALL_USERS_IN_PROGRESS, listeningUsers);
  yield takeLatest(LISTENER_ALL_USERS_CANCEL, cancelListeningUsers);
}
export default usersWatcher;
