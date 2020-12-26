import {
  //get weather Data
  GET_WEATHER_IN_PROGRESS,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILED,
} from "constants/actions";

//get weather Data
export const getWeatherDataInProgress = (getWeatherInfo) => {
  return {
    type: GET_WEATHER_IN_PROGRESS,
    payload: {
      ...getWeatherInfo,
    },
  };
};

export const getWeatherDataSuccess = (weatherData, selected) => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: {
      weatherData,
      selected,
    },
  };
};

export const getWeatherDataFailed = (error) => {
  return {
    type: GET_WEATHER_FAILED,
    payload: { error },
  };
};
