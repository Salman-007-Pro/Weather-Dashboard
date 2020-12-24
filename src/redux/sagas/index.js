import { all } from "redux-saga/effects";

//counter Watcher
import counterWatcher from "./counterWatcher";

//countries Watcher
import countriesWatcher from "./countriesWatcher";

//weather Watcher
import weatherWatcher from "./weatherWatcher";

//auth Wathcer
import authWatcher from "./authWatcher";

function* rootSaga() {
  yield all([counterWatcher(), countriesWatcher(), weatherWatcher(), authWatcher()]);
}
export default rootSaga;
