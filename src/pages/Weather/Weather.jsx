//main
import React from "react";
import { useSelector } from "react-redux";

//components
import Heading from "Components/Shared/Heading/Heading";
import SelectForm from "Components/SelectForm/SelectForm";
import GMap from "Components/GMap/GMap";
import DataTable from "Components/Shared/DataTable/DataTable";

//momentjs
import moment from "moment";

//scss
import "./Weather.scss";

const Weather = () => {
  const { weatherData } = useSelector((state) => state.Weather);
  const tableData = weatherData.map((el, index) => ({
    key: index,
    country: el.country,
    region: el.region,
    city: el.city,
    temperature: (el.current.temp - 273.15).toFixed(0) + "C",
    feellike: (el.current.feels_like - 273.15).toFixed(0) + "C",
    cloud: el.current.clouds,
    windspeed: el.current.wind_speed + " km/hr",
    sunrise: moment(el.current.sunrise).format("Do MMM YYYY, h:mm:ss"),
    sunset: moment(el.current.sunset).format("Do MMM YYYY, h:mm:ss"),
  }));
  return (
    <div className="weather-wrapper">
      <Heading text="Weather Check Any Country, City or Region" />
      <div className="weather-selection-form">
        <SelectForm />
      </div>
      <div className="weather-table">
        <DataTable data={tableData} text="Current Data:" />
        <p>
          Subscribe to the weather update to get forecast data for 7 days{" "}
          <span>(Subscribe Now)</span>
        </p>
      </div>
      {/* further used not yet */}
      {/* <div className="weather-table">
        <DataTable data={tableData} text="Forecast Data of 7 days:" />
      </div> */}
      <div className="weather-map">
        <GMap weathers={weatherData} />
      </div>
    </div>
  );
};

export default Weather;
