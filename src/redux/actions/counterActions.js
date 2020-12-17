import { INCREAMENT_COUNTER, DECREAMENT_COUNTER } from "constants/actions";

export const incCounter = () => {
  return {
    type: INCREAMENT_COUNTER,
  };
};
export const decCounter = () => {
  return {
    type: DECREAMENT_COUNTER,
  };
};
