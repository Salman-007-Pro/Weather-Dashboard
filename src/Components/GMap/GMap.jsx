//main
import React, { useState } from "react";

//MapBox
import ReactMapGL, { Marker } from "react-map-gl";

//scss
import "./GMap.scss";

//image
import MarkerImage from "assets/marker/mapbox-icon.png";

const GMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 30.37532,
    longitude: 69.345116,
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken="pk.eyJ1Ijoic2FsbWFuLWFzaWYiLCJhIjoiY2tpdnE3NGoyM2E2MDJybGJteDdodmZqZyJ9.mG0O6hcWIvKjsW_tC0CpDg"
      onViewportChange={(viewport) => setViewport(viewport)}>
      <Marker key="#asd" longitude={69.345116} latitude={30.37532}>
        <button className="marker-btn">
          <img src={MarkerImage} alt="marker" />
        </button>
      </Marker>
    </ReactMapGL>
  );
};
export default GMap;
