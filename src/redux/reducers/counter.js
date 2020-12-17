import { INCREAMENT_COUNTER_SOLVED, DECREAMENT_COUNTER_SOLVED } from "constants/actions";

const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT_COUNTER_SOLVED:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREAMENT_COUNTER_SOLVED:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default counter;
