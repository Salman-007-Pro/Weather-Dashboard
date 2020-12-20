import React from "react";

//components
import Heading from "Components/Shared/Heading/Heading";
import SelectForm from "Components/SelectForm/SelectForm";
import GMap from "Components/GMap/GMap";
import DataTable from "Components/Shared/DataTable/DataTable";

//scss
import "./Weather.scss";

const Weather = () => {
  return (
    <div className="weather-wrapper">
      <Heading text="Weather Check Any Country, City or Region" />
      <div className="weather-selection-form">
        <SelectForm />
      </div>
      <div className="weather-table">
        <DataTable />
      </div>
      <div className="weather-map">
        <GMap />
      </div>
    </div>
  );
};

export default Weather;
