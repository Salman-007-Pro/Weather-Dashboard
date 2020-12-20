import { takeLatest, put, call, select } from "redux-saga/effects";
import _ from "lodash";
//actions
import Actions from "redux/actions";

//api
import { getWeather } from "Api/weatherApi/weatherApi";

//constants
import {
  //weather info
  GET_WEATHER_IN_PROGRESS,
} from "constants/actions";

const {
  //get weather update
  getWeatherDataSuccess,
  getWeatherDataFailed,
} = Actions;

function* getAllCountry({ payload }) {
  try {
    const { latitude, longitude } = payload;
    const { data } = yield call(getWeather, latitude, longitude);
    let weatherData = yield select((state) => state.Weather?.weatherData);
    payload["current"] = data.current;
    // payload["daily"] = data.daily;
    const index = weatherData.findIndex((el) => el.city === payload.city);
    index >= 0 ? (weatherData[index] = payload) : weatherData.unshift(payload);
    yield put(getWeatherDataSuccess(weatherData));
  } catch (err) {
    console.log(err);
    yield put(getWeatherDataFailed(err));
  }
}

function* weatherWatcher() {
  yield takeLatest(GET_WEATHER_IN_PROGRESS, getAllCountry);
}
export default weatherWatcher;
