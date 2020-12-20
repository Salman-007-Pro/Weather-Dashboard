import {
  //all country
  GET_ALL_COUNTRY_IN_PROGRESS,
  GET_ALL_COUNTRY_SUCCESS,
  GET_ALL_COUNTRY_FAILED,

  //country regions
  GET_COUNTRY_REGIONS_IN_PROGRESS,
  GET_COUNTRY_REGIONS_SUCCESS,
  GET_COUNTRY_REGIONS_FAILED,

  //region cities
  GET_REGION_CITIES_IN_PROGRESS,
  GET_REGION_CITIES_SUCCESS,
  GET_REGION_CITIES_FAILED,
} from "constants/actions";

//all country
export const getAllCountryInProgress = () => {
  return {
    type: GET_ALL_COUNTRY_IN_PROGRESS,
  };
};

export const getAllCountrySuccess = (countries) => {
  return {
    type: GET_ALL_COUNTRY_SUCCESS,
    payload: {
      countries,
    },
  };
};

export const getAllCountryFailed = (error) => {
  return {
    type: GET_ALL_COUNTRY_FAILED,
    payload: { error },
  };
};

//country regions
export const getCountryRegionsInProgress = (countryCode) => {
  return {
    type: GET_COUNTRY_REGIONS_IN_PROGRESS,
    payload: {
      countryCode,
    },
  };
};

export const getCountryRegionsSuccess = (regions) => {
  return {
    type: GET_COUNTRY_REGIONS_SUCCESS,
    payload: {
      regions,
    },
  };
};

export const getCountryRegionsFailed = (error) => {
  return {
    type: GET_COUNTRY_REGIONS_FAILED,
    payload: { error },
  };
};

//region cities
export const getRegionCitiesInProgress = (countryCode, region) => {
  return {
    type: GET_REGION_CITIES_IN_PROGRESS,
    payload: {
      countryCode,
      region,
    },
  };
};

export const getRegionCitiesSuccess = (cities) => {
  return {
    type: GET_REGION_CITIES_SUCCESS,
    payload: {
      cities,
    },
  };
};

export const getRegionCitiesFailed = (error) => {
  return {
    type: GET_REGION_CITIES_FAILED,
    payload: { error },
  };
};
