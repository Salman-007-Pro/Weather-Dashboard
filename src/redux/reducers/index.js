//main
import { combineReducers } from "redux";

//reducers
import Counter from "redux/reducers/counter";

const rootReducer = combineReducers({
  Counter,
});

export default rootReducer;
