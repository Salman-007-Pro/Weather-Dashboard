import { all } from "redux-saga/effects";

//counterWatcher
import counterWatcher from "./counterWatcher";

function* rootSaga() {
  yield all([counterWatcher()]);
}
export default rootSaga;
