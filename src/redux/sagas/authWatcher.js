import { takeLatest, put, call, delay } from "redux-saga/effects";

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

  //facebook login
  FACEBOOK_LOGIN_IN_PROGRESS,

  //google login
  GOOGLE_LOGIN_IN_PROGRESS,

  //github login
  GITHUB_LOGIN_IN_PROGRESS,

  //subscription
  SUBSCRIPTION_IN_PROGRESS,

  //unsubscribe
  UNSUBSCRIBE_IN_PROGRESS,
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

  //facebook login
  facebookLoginSuccess,
  facebookLoginFailed,

  //google login
  googleLoginSuccess,
  googleLoginFailed,

  //github login
  githubLoginSuccess,
  githubLoginFailed,

  //subscription
  subscriptionSuccess,
  subscriptionFailed,

  //unsubscription
  unsubscriptionSuccess,
  unsubscriptionFailed,
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
      subscription: false,
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
    // const user = yield call(getDataFirebase, "users", uid);
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginFailed(err));
  }
}

function* checkAuth({ payload }) {
  try {
    const { user } = payload;
    yield delay(1000);
    if (user) {
      const { uid } = user;
      const curUser = yield call(getDataFirebase, "users", uid);
      const localuid = yield call([localStorage, localStorage.getItem], "token");
      const isAuth = uid === localuid ? true : false;
      yield put(checkAuthSuccess(curUser, isAuth));
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
    yield call([localStorage, localStorage.clear]);
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailed(err));
  }
}

//google
function* googleLogin() {
  try {
    console.log("google");
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });
    const result = yield call([auth, auth.signInWithPopup], provider);
    let user = yield call(getDataFirebase, "users", result.user.uid);
    if (!user) {
      yield call(setDataFirebase, "users", result.user.uid, {
        name: result?.user?.displayName,
        imageUrl: result?.user?.photoURL,
        role: USER,
        subscription: false,
      });
      user = yield call(getDataFirebase, "users", result.user.uid);
    }
    yield put(googleLoginSuccess(user));
  } catch (err) {
    yield put(googleLoginFailed(err));
  }
}

//facebook
function* facebookLogin() {
  try {
    console.log("facebook");
    let provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });
    const result = yield call([auth, auth.signInWithPopup], provider);
    let user = yield call(getDataFirebase, "users", result.user.uid);
    if (!user) {
      yield call(setDataFirebase, "users", result.user.uid, {
        name: result?.user?.displayName,
        imageUrl: result?.user?.photoURL,
        role: USER,
        subscription: false,
      });
      user = yield call(getDataFirebase, "users", result.user.uid);
    }
    yield put(facebookLoginSuccess(user));
  } catch (err) {
    yield put(facebookLoginFailed(err));
  }
}

//github
function* githubLogin() {
  try {
    console.log("github");
    let provider = new firebase.auth.GithubAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });
    const result = yield call([auth, auth.signInWithPopup], provider);
    let user = yield call(getDataFirebase, "users", result.user.uid);
    if (!user) {
      yield call(setDataFirebase, "users", result.user.uid, {
        name: result?.user?.displayName,
        imageUrl: result?.user?.photoURL,
        role: USER,
        subscription: false,
      });
      user = yield call(getDataFirebase, "users", result.user.uid);
    }
    yield put(githubLoginSuccess(user));
  } catch (err) {
    yield put(githubLoginFailed(err));
  }
}

function* subscription() {
  try {
    const { uid } = yield auth.currentUser;
    yield call(updateDataFirebase, "users", uid, {
      subscription: true,
    });
    //  yield call(getDataFirebase, "users", uid);
    yield put(subscriptionSuccess(true));
  } catch (err) {
    console.log(err);
    yield put(subscriptionFailed(err));
  }
}

function* unsubscription() {
  try {
    const { uid } = yield auth.currentUser;
    yield call(updateDataFirebase, "users", uid, {
      subscription: false,
    });
    // const user = yield call(getDataFirebase, "users", uid);
    yield put(unsubscriptionSuccess(false));
  } catch (err) {
    console.log(err);
    yield put(unsubscriptionFailed(err));
  }
}

function* authWatcher() {
  yield takeLatest(SIGN_UP_IN_PROGRESS, signup);
  yield takeLatest(LOGIN_IN_PROGRESS, login);
  yield takeLatest(CHECK_AUTH_IN_PROGRESS, checkAuth);
  yield takeLatest(LOGOUT_IN_PROGRESS, logout);
  yield takeLatest(FACEBOOK_LOGIN_IN_PROGRESS, facebookLogin);
  yield takeLatest(GOOGLE_LOGIN_IN_PROGRESS, googleLogin);
  yield takeLatest(GITHUB_LOGIN_IN_PROGRESS, githubLogin);
  yield takeLatest(SUBSCRIPTION_IN_PROGRESS, subscription);
  yield takeLatest(UNSUBSCRIBE_IN_PROGRESS, unsubscription);
}
export default authWatcher;
