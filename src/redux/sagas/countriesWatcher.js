import { takeLatest, put, call } from "redux-saga/effects";
import _ from "lodash";
//actions
import Actions from "redux/actions";

//api
import {
  getAllCountryName,
  getCountryRegions as getRegions,
  getRegionCities as getCities,
} from "Api/weatherApi/weatherApi";

//constants
import {
  //all country
  GET_ALL_COUNTRY_IN_PROGRESS,

  //country regions
  GET_COUNTRY_REGIONS_IN_PROGRESS,

  //region cities
  GET_REGION_CITIES_IN_PROGRESS,
} from "constants/actions";

const {
  //get all countries
  getAllCountrySuccess,
  getAllCountryFailed,

  //get country regions
  getCountryRegionsSuccess,
  getCountryRegionsFailed,

  //get region Cities
  getRegionCitiesSuccess,
  getRegionCitiesFailed,
} = Actions;

const countryAvaliable = [
  "Afghanistan",
  "Pakistan",
  "India",
  "China",
  "Japan",
  "Turkey",
  "South Africa",
  "Saudi Arabia",
  "Qatar",
  "Oman",
];
const withSubscribe = ["Canada", "United States of America", "Yemen", "Germany", "Australia"];

function* getAllCountry() {
  try {
    const { data } = yield call(getAllCountryName);
    const filterData = data.filter((country) =>
      countryAvaliable.some((name) => name === country.name)
    );
    // const a = _.keyBy(filterData, "name");
    // console.log(a);
    yield put(getAllCountrySuccess(filterData));
  } catch (err) {
    yield put(getAllCountryFailed(err));
  }
}

function* getCountryRegions({ payload }) {
  try {
    const { countryCode } = payload;
    const { data } = yield call(getRegions, countryCode);
    yield put(getCountryRegionsSuccess(data));
  } catch (err) {
    yield put(getCountryRegionsFailed(err));
  }
  //   yield put({ type: DECREAMENT_COUNTER_SOLVED });
}

function* getRegionCities({ payload }) {
  try {
    const { countryCode, region } = payload;
    const { data } = yield call(getCities, countryCode, region);
    yield put(getRegionCitiesSuccess(data));
  } catch (err) {
    yield put(getRegionCitiesFailed(err));
  }
}

function* countriesWatcher() {
  yield takeLatest(GET_ALL_COUNTRY_IN_PROGRESS, getAllCountry);
  yield takeLatest(GET_COUNTRY_REGIONS_IN_PROGRESS, getCountryRegions);
  yield takeLatest(GET_REGION_CITIES_IN_PROGRESS, getRegionCities);
}
export default countriesWatcher;
