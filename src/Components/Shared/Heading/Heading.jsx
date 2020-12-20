import React from "react";

//scss
import "./Heading.scss";

const Heading = ({ text }) => {
  return (
    <div className="heading-wrapper">
      <h1>{text}</h1>
    </div>
  );
};

export default Heading;
