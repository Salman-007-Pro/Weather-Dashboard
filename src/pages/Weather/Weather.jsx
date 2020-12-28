//main
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//stripe checkout
import StripeCheckout from "react-stripe-checkout";

//antd components
import { Button } from "antd";

//components
import Heading from "Components/Shared/Heading/Heading";
import SelectForm from "Components/SelectForm/SelectForm";
import GMap from "Components/GMap/GMap";
import DataTable from "Components/Shared/DataTable/DataTable";
import Alert from "Components/Shared/Alert/Alert";

//constants
import { ADMIN, USER } from "constants/role";
import { IN_PROGRESS, FAILED } from "constants/loader";

//actions
import Actions from "redux/actions";

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

const {
  //get subscription
  subscriptionInProgress,

  //get unsubcription
  unsubscriptionInProgress,
} = Actions;

const Weather = () => {
  const dispatch = useDispatch();
  const { weatherData, selected } = useSelector((state) => state.Weather);
  const {
    uiStateSubscription,
    uiStateUnsubscription,
    user: { role, subscription },
    error,
  } = useSelector((state) => state.Auth);

  let searchData, currentData, forecastData;
  const subscriptionHandler = (token) => {
    const { id } = token;
    dispatch(subscriptionInProgress());
  };

  const unsubscriptionHandler = (token) => {
    const { id } = token;
    dispatch(unsubscriptionInProgress());
  };

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
        {role !== ADMIN && !subscription && (
          <p>
            Subscribe to get the weather update for 7 days of forecast data{" "}
            <StripeCheckout
              stripeKey="pk_test_51I2k9hA4XjJGkrHH8i12F9G4rEe530dpc915nENgeozp0UO2a4EV1NjAtiCOxsf6ox2R1FZdUa9tZehD9h88OQDA00ZxcSym09"
              token={subscriptionHandler}
              name="Subscription"
              description="More Detail of Weather(4242 4242 4242 4242)"
              amount={100 * 100}
              currency="USD">
              <Button className="unsub-btn" loading={uiStateSubscription === IN_PROGRESS}>
                (Subscribe Now)
              </Button>
            </StripeCheckout>
          </p>
        )}
        {role === USER && subscription && (
          <p>
            UnSubscribe details{" "}
            <Button
              className="unsub-btn"
              onClick={unsubscriptionHandler}
              loading={uiStateUnsubscription === IN_PROGRESS}>
              (UnSubscribe Now)
            </Button>
          </p>
        )}
      </div>
      {(role === ADMIN || subscription) && (
        <div className="weather-table">
          <DataTable data={currentData} text="Current Data:" columns={columns} />
        </div>
      )}
      {(role === ADMIN || subscription) && (
        <div className="weather-table">
          <DataTable data={forecastData} text="Forecast Data of 7 days:" columns={columns} />
        </div>
      )}
      <div className="weather-map">
        <GMap weathers={weatherData} />
      </div>
      {uiStateSubscription === FAILED && <Alert message={error.message} type="error" showIcon />}
      {uiStateUnsubscription === FAILED && <Alert message={error.message} type="error" showIcon />}
    </div>
  );
};

export default Weather;
