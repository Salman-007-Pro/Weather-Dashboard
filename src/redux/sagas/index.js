import { all } from "redux-saga/effects";

//counterWatcher
import counterWatcher from "./counterWatcher";

//countriesWatcher
import countriesWatcher from "./countriesWatcher";

function* rootSaga() {
  yield all([counterWatcher(), countriesWatcher()]);
}
export default rootSaga;
