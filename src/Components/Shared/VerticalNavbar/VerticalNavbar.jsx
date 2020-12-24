//main
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";

//antd components
import { Layout, Menu, Avatar, Button } from "antd";

//components
import Alert from "Components/Shared/Alert/Alert";

//andt icon
import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

//actions
import Actions from "redux/actions";

//constant
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

//scss
import "./VerticalNavbar.scss";

const { Sider } = Layout;

const {
  //logout
  logoutInProgress,
} = Actions;

const VerticalNavbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { uiStateLogout, error } = useSelector((state) => state.Auth);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  if (uiStateLogout === SUCCESS) {
    history.go("/auth/login");
    // return <Redirect to="/" />;
  }

  return (
    <>
      <Sider
        width={280}
        className="site-layout-background"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}>
        <div className="slider-wrapper">
          <div className="slider-user">
            <div className="user-avatar">
              <Avatar size={55} icon={<UserOutlined />} />
            </div>
            {!collapsed && <h2 className="user-name">Muhammad Salman Asif</h2>}
          </div>
          <div className="slider-menu">
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="46" icon={<UsergroupAddOutlined />}>
                All Users
              </Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>
                Setting
              </Menu.Item>
              <Menu.Item key="3" icon={<LogoutOutlined />}>
                <Button
                  loading={uiStateLogout === IN_PROGRESS}
                  onClick={() => dispatch(logoutInProgress())}>
                  Logout
                </Button>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </Sider>
      {uiStateLogout === FAILED && <Alert message={error.message} type="error" showIcon />}
    </>
  );
};

export default VerticalNavbar;
