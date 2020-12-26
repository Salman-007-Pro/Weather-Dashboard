import { all, fork } from "redux-saga/effects";

//counter Watcher
import counterWatcher from "./counterWatcher";

//countries Watcher
import countriesWatcher from "./countriesWatcher";

//weather Watcher
import weatherWatcher from "./weatherWatcher";

//auth Wathcer
import authWatcher from "./authWatcher";

//users Wathcer
import usersWatcher from "./usersWatcher";

function* rootSaga() {
  yield all([
    fork(counterWatcher),
    fork(countriesWatcher),
    fork(weatherWatcher),
    fork(authWatcher),
    fork(usersWatcher),
  ]);
}
export default rootSaga;
