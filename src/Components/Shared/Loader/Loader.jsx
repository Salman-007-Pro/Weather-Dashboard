import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./Loader.scss";

const Loader = ({ spin = 30 }) => {
  return (
    <Spin
      size="large"
      indicator={<LoadingOutlined style={{ fontSize: spin }} spin />}
      className="loader-center1"
    />
  );
};

export default Loader;
