//main
import { combineReducers } from "redux";

//reducers
import Counter from "redux/reducers/counter";
import Countries from "redux/reducers/countries";
import Weather from "redux/reducers/weather";

const rootReducer = combineReducers({
  Counter,
  Countries,
  Weather,
});

export default rootReducer;
