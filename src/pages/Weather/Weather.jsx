//main
import React from "react";
import { useSelector } from "react-redux";

//components
import Heading from "Components/Shared/Heading/Heading";
import SelectForm from "Components/SelectForm/SelectForm";
import GMap from "Components/GMap/GMap";
import DataTable from "Components/Shared/DataTable/DataTable";

//constants
import { ADMIN } from "constants/role";

//momentjs
import moment from "moment";

//scss
import "./Weather.scss";

const columns = [
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "Region",
    dataIndex: "region",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Temperature",
    dataIndex: "temperature",
  },
  {
    title: "Feel-Like",
    dataIndex: "feellike",
  },
  {
    title: "Cloud",
    dataIndex: "cloud",
  },
  {
    title: "Sunrise",
    dataIndex: "sunrise",
  },
  {
    title: "Sunset",
    dataIndex: "sunset",
  },
  {
    title: "Wind-Speed",
    dataIndex: "windspeed",
  },
];

const Weather = () => {
  const { weatherData, selected } = useSelector((state) => state.Weather);
  const {
    user: { role },
  } = useSelector((state) => state.Auth);
  let searchData, currentData, forecastData;
  if (weatherData.length > 0) {
    const { country, region, city, daily, current } =
      selected >= 0 ? weatherData[selected] : weatherData[0];
    searchData = weatherData.map((el, index) => ({
      key: index,
      country: el.country,
      region: el.region,
      city: el.city,
      temperature: (el.current.temp - 273.15).toFixed(0) + "C",
      feellike: (el.current.feels_like - 273.15).toFixed(0) + "C",
      cloud: el.current.clouds + "%",
      windspeed: el.current.wind_speed + " km/hr",
      sunrise: moment.unix(el.current.sunrise).format("Do MMM YYYY, h:mm:ss"),
      sunset: moment.unix(el.current.sunset).format("Do MMM YYYY, h:mm:ss"),
    }));
    currentData = [
      {
        key: 0,
        country: country,
        region: region,
        city: city,
        temperature: (current.temp - 273.15).toFixed(0) + "C",
        feellike: (current.feels_like - 273.15).toFixed(0) + "C",
        cloud: current.clouds + "%",
        windspeed: current.wind_speed + " km/hr",
        sunrise: moment.unix(current.sunrise).format("Do MMM YYYY, h:mm:ss"),
        sunset: moment.unix(current.sunset).format("Do MMM YYYY, h:mm:ss"),
      },
    ];
    forecastData = daily?.map((el, index) => ({
      key: index,
      country: country,
      region: region,
      city: city,
      temperature: (el.temp.day - 273.15).toFixed(0) + "C",
      feellike: (el.feels_like.day - 273.15).toFixed(0) + "C",
      cloud: el.clouds + "%",
      windspeed: el.wind_speed + " km/hr",
      sunrise: moment.unix(el.sunrise).format("Do MMM YYYY, h:mm:ss"),
      sunset: moment.unix(el.sunset).format("Do MMM YYYY, h:mm:ss"),
    }));
  }
  return (
    <div className="weather-wrapper">
      <Heading text="Weather Check Any Country, City or Region" />
      <div className="weather-selection-form">
        <SelectForm />
      </div>
      <div className="weather-table">
        <DataTable data={searchData} text="Search Data:" columns={columns} />
        {role !== ADMIN && (
          <p>
            Subscribe to the weather update to get forecast data for 7 days{" "}
            <span>(Subscribe Now)</span>
          </p>
        )}
      </div>
      <div className="weather-table">
        <DataTable data={currentData} text="Current Data:" columns={columns} />
      </div>
      {role === ADMIN && (
        <div className="weather-table">
          <DataTable data={forecastData} text="Forecast Data of 7 days:" columns={columns} />
        </div>
      )}
      <div className="weather-map">
        <GMap weathers={weatherData} />
      </div>
    </div>
  );
};

export default Weather;
