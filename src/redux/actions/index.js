//actions
import * as counterActions from "redux/actions/counterActions";
import * as getAllCountryActions from "redux/actions/getAllCountryActions";
import * as getWeatherDataActions from "redux/actions/weatherAction";

const allActions = {
  ...counterActions,
  ...getAllCountryActions,
  ...getWeatherDataActions,
};

export default { ...allActions };
