import {
  //get weather Data
  GET_WEATHER_IN_PROGRESS,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILED,
} from "constants/actions";

import {
  //loader
  IN_PROGRESS,
  SUCCESS,
  FAILED,
} from "constants/loader";

const initialState = {
  uiState: null,
  weatherData: [],
  selected: null,
  error: "",
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
        error: "",
      };

    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        weatherData: action.payload.weatherData,
        selected: action.payload.selected,
        error: "",
      };
    case GET_WEATHER_FAILED:
      return {
        ...state,
        uiState: FAILED,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default weather;
