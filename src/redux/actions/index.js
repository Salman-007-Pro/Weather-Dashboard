//actions
import * as counterActions from "redux/actions/counterActions";
import * as getAllCountryActions from "redux/actions/getAllCountryActions";

const allActions = {
  ...counterActions,
  ...getAllCountryActions,
};

export default { ...allActions };
