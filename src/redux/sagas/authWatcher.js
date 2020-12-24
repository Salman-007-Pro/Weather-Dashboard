import { takeLatest, put, call } from "redux-saga/effects";
import _ from "lodash";

//firebase instance
import firebase from "FirebaseConfig/config";

//actions
import Actions from "redux/actions";

//constants
import {
  //sign up
  SIGN_UP_IN_PROGRESS,

  //login
  LOGIN_IN_PROGRESS,

  //check auth
  CHECK_AUTH_IN_PROGRESS,

  //logout
  LOGOUT_IN_PROGRESS,
} from "constants/actions";

import { ADMIN, USER } from "constants/role";

const {
  //sign up
  signupSuccess,
  signupFailed,

  //login
  loginSuccess,
  loginFailed,

  //check auth
  checkAuthSuccess,
  checkAuthFailed,

  //logout
  logoutSuccess,
  logoutFailed,
} = Actions;

//auth
const auth = firebase.auth();
const db = firebase.firestore();

const setDataFirebase = async (coll, document, data) => {
  return db.collection(coll).doc(document).set(data);
};
const updateDataFirebase = async (coll, document, data) => {
  return db.collection(coll).doc(document).update(data);
};

const getDataFirebase = async (coll, document) => {
  const response = await db.collection(coll).doc(document).get();
  return response.data();
};

function* signup({ payload }) {
  try {
    const { email, password, name } = payload;
    const {
      user: { uid },
    } = yield call([auth, auth.createUserWithEmailAndPassword], email, password);
    yield call([localStorage, localStorage.setItem], "token", uid);
    yield call(setDataFirebase, "users", uid, {
      name: name,
      role: USER,
    });
    const user = yield call(getDataFirebase, "users", uid);
    yield put(signupSuccess(user));
  } catch (err) {
    yield put(signupFailed(err));
  }
}

function* login({ payload }) {
  try {
    const { email, password } = payload;
    const {
      user: { uid },
    } = yield call([auth, auth.signInWithEmailAndPassword], email, password);
    yield call([localStorage, localStorage.setItem], "token", uid);
    const user = yield call(getDataFirebase, "users", uid);
    yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

function* checkAuth() {
  try {
    const user = yield auth.currentUser;
    if (user) {
      const localuid = yield call([localStorage, localStorage.getItem], "token");
      const isAuth = user?.uid === localuid ? true : false;
      yield put(checkAuthSuccess(isAuth));
    } else {
      yield put(checkAuthFailed("Not valid user"));
    }
  } catch (err) {
    yield put(checkAuthFailed(err));
  }
}

function* logout() {
  try {
    yield auth.signOut();
    const user = yield auth.currentUser;
    yield call([localStorage, localStorage.clear]);
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailed(err));
  }
}

function* authWatcher() {
  yield takeLatest(SIGN_UP_IN_PROGRESS, signup);
  yield takeLatest(LOGIN_IN_PROGRESS, login);
  yield takeLatest(CHECK_AUTH_IN_PROGRESS, checkAuth);
  yield takeLatest(LOGOUT_IN_PROGRESS, logout);
}
export default authWatcher;
