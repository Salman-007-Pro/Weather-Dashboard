//actions
import * as counterActions from "redux/actions/counterActions";
import * as getAllCountryActions from "redux/actions/getAllCountryActions";
import * as getWeatherDataActions from "redux/actions/weatherAction";
import * as authentication from "redux/actions/authActions";
import * as usersAction from "redux/actions/usersAction";

const allActions = {
  ...counterActions,
  ...getAllCountryActions,
  ...getWeatherDataActions,
  ...authentication,
  ...usersAction,
};

export default allActions;
