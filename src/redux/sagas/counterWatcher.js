import { takeLatest, put } from "redux-saga/effects";

//constants
import {
  INCREAMENT_COUNTER,
  DECREAMENT_COUNTER,
  INCREAMENT_COUNTER_SOLVED,
  DECREAMENT_COUNTER_SOLVED,
} from "constants/actions";

function* addCounter() {
  yield put({ type: INCREAMENT_COUNTER_SOLVED });
}

function* decCounter() {
  yield put({ type: DECREAMENT_COUNTER_SOLVED });
}

function* counterWatcher() {
  yield takeLatest(INCREAMENT_COUNTER, addCounter);
  yield takeLatest(DECREAMENT_COUNTER, decCounter);
}
export default counterWatcher;
