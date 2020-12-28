//main
import React, { useState, useEffect } from "react";

//MapBox
import ReactMapGL, { Marker, Popup } from "react-map-gl";

//scss
import "./GMap.scss";

//image
import MarkerImage from "assets/marker/mapbox-icon.png";

const GMap = ({ weathers }) => {
  const checkWeather = weathers.length > 0 ? weathers[0] : null;
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 30.37532,
    longitude: 69.345116,
    zoom: 5,
  });
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedCountry(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  useEffect(() => {
    setViewport({
      latitude: weathers?.length ? parseFloat(weathers[0]?.latitude) : 30.37532,
      longitude: weathers?.length ? parseFloat(weathers[0]?.longitude) : 69.345116,
      zoom: 5,
    });
  }, [checkWeather]);
  return (
    <ReactMapGL
      className="map-wrapper"
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}>
      {weathers?.map((country) => {
        return (
          <Marker
            key={country.city}
            latitude={parseFloat(country.latitude)}
            longitude={parseFloat(country.longitude)}>
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCountry(country);
              }}>
              <img src={MarkerImage} alt="markers" />
            </button>
          </Marker>
        );
      })}

      {selectedCountry ? (
        <Popup
          latitude={parseFloat(selectedCountry.latitude)}
          longitude={parseFloat(selectedCountry.longitude)}
          offsetLeft={20}
          offsetTop={4}
          onClose={() => {
            setSelectedCountry(null);
          }}>
          <div className="popup-wrapper">
            <h2>Country: {selectedCountry.country}</h2>
            <h3>Region: {selectedCountry.region}</h3>
            <h4>City: {selectedCountry.city}</h4>
            <p>
              Current Temperature: {(selectedCountry.current.temp - 273.15).toFixed(0) + "C"} and
              Feels-Like: {(selectedCountry.current.feels_like - 273.15).toFixed(0) + "C"}
            </p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
};
export default GMap;
