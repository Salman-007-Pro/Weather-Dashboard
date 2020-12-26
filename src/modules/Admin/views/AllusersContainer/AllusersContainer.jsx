//main
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//antd components
import { Button, message } from "antd";

//components
import DataTable from "Components/Shared/DataTable/DataTable";
import Alert from "Components/Shared/Alert/Alert";

//actions
import Actions from "redux/actions";

//loader
import { IN_PROGRESS, FAILED } from "constants/loader";

//scss
import "./AllusersContainer.scss";

const {
  //listening users
  listeningAllUsersInProgress,
  listeningAllUsersCancel,
} = Actions;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text, record) => {
      return <Button onClick={() => message.info("no functionality added")}>Delete</Button>;
    },
  },
];

const AllusersContainer = () => {
  const { uiStateUsers, allusers, error } = useSelector((state) => state.Users);
  const usersData = allusers.map((el, index) => ({
    key: index,
    name: el.name,
    role: el.role,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listeningAllUsersInProgress());
    return () => {
      dispatch(listeningAllUsersCancel());
    };
  }, []);

  return (
    <div className="alluser-wrapper">
      <h1>All Users</h1>
      <div className="users-table">
        <DataTable columns={columns} data={usersData} loading={uiStateUsers === IN_PROGRESS} />
      </div>
      {uiStateUsers === FAILED && <Alert message={error.message} type="error" showIcon />}
    </div>
  );
};

export default AllusersContainer;
