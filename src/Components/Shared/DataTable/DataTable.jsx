//main
import React from "react";

//components
import { Table } from "antd";

//scss
import "./DataTable.scss";

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

const DataTable = ({ data, text }) => {
  return (
    <div className="datatable-wrapper">
      <h2>{text}</h2>
      <Table columns={columns} dataSource={data} size="middle" pagination={false} />
    </div>
  );
};

export default DataTable;
