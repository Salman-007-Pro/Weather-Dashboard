//main
import { combineReducers } from "redux";

//reducers
import Counter from "redux/reducers/counter";
import Countries from "redux/reducers/countries";
import Weather from "redux/reducers/weather";
import Auth from "redux/reducers/auth";

const rootReducer = combineReducers({
  Counter,
  Countries,
  Weather,
  Auth,
});

export default rootReducer;
