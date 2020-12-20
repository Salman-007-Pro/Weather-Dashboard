import { all } from "redux-saga/effects";

//counterWatcher
import counterWatcher from "./counterWatcher";

//countriesWatcher
import countriesWatcher from "./countriesWatcher";

//weather Watcher
import weatherWatcher from "./weatherWatcher";

function* rootSaga() {
  yield all([counterWatcher(), countriesWatcher(), weatherWatcher()]);
}
export default rootSaga;
