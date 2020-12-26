//main
import React from "react";

//components
import { Table } from "antd";

//scss
import "./DataTable.scss";

const DataTable = ({ data, text, columns, loading }) => {
  return (
    <div className="datatable-wrapper">
      <h2>{text}</h2>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
      />
    </div>
  );
};

export default DataTable;
