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

import {
  //loader
  IN_PROGRESS,
  SUCCESS,
  FAILED,
} from "constants/loader";

const initialState = {
  uiStateCountries: null,
  uiStateRegions: null,
  uiStateCities: null,
  countries: [],
  regions: [],
  cities: [],
  error: "",
};

const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRY_IN_PROGRESS:
      return {
        ...state,
        uiStateCountries: IN_PROGRESS,
        error: "",
      };

    case GET_ALL_COUNTRY_SUCCESS:
      return {
        ...state,
        uiStateCountries: SUCCESS,
        countries: action.payload.countries,
        error: "",
      };
    case GET_ALL_COUNTRY_FAILED:
      return {
        ...state,
        uiStateCountries: FAILED,
        error: action.payload.error,
      };

    case GET_COUNTRY_REGIONS_IN_PROGRESS:
      return {
        ...state,
        uiStateRegions: IN_PROGRESS,
        error: "",
      };

    case GET_COUNTRY_REGIONS_SUCCESS:
      return {
        ...state,
        uiStateRegions: SUCCESS,
        regions: action.payload.regions,
        error: "",
      };
    case GET_COUNTRY_REGIONS_FAILED:
      return {
        ...state,
        uiStateRegions: FAILED,
        error: action.payload.error,
      };

    case GET_REGION_CITIES_IN_PROGRESS:
      return {
        ...state,
        uiStateCities: IN_PROGRESS,
        error: "",
      };

    case GET_REGION_CITIES_SUCCESS:
      return {
        ...state,
        uiStateCities: SUCCESS,
        cities: action.payload.cities,
        error: "",
      };
    case GET_REGION_CITIES_FAILED:
      return {
        ...state,
        uiStateCities: FAILED,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default countries;
