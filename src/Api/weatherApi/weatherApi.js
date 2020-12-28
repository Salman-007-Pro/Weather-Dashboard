// ek all wali hai jis se country milay gi http://battuta.medunes.net/api/country/all/?key=ca6b0e43115ea85b899a54150ad0e1dc
// region nikal ne ki hai  `http://battuta.medunes.net/api/region/pk/all/?key=ca6b0e43115ea85b899a54150ad0e1dc`
// yeh region ki city nikal ne ke liye hai "http://battuta.medunes.net/api/city/pk/search/?region=Sindh&key=ca6b0e43115ea85b899a54150ad0e1dc"

//weather data
// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}

import axios from "axios";

const key = "90ccdbc141bc100dfce3391908bf009b";
const corsfixer = "https://cors-anywhere.herokuapp.com/";

export const getAllCountryName = async () => {
  return await axios.get(`${corsfixer}http://battuta.medunes.net/api/country/all/?key=${key}`);
};

export const getCountryRegions = async (countryCode) => {
  return await axios.get(
    `${corsfixer}http://battuta.medunes.net/api/region/${countryCode}/all/?key=${key}`
  );
};

export const getRegionCities = async (countryCode, region) => {
  return await axios.get(
    `${corsfixer}http://battuta.medunes.net/api/city/${countryCode}/search/?region=${region}&key=${key}`
  );
};

export const getWeather = async (lat, lon) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=bed562c99cdf4399ea14ebd43d318b86`
  );
};
