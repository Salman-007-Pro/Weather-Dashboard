//main
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

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
import { ADMIN, USER } from "constants/role";

//scss
import "./VerticalNavbar.scss";

const { Sider } = Layout;

const {
  //logout
  logoutInProgress,
} = Actions;

const VerticalNavbar = () => {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const {
    uiStateLogout,
    error,
    user: { role, name, imageUrl },
  } = useSelector((state) => state.Auth);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  if (uiStateLogout === SUCCESS) {
    history.go("/auth/login");
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
              <Avatar
                src={imageUrl}
                size={55}
                icon={<UserOutlined />}
                style={{ backgroundColor: "#87d068" }}>
                {name[0]}
              </Avatar>
            </div>
            {!collapsed && <h2 className="user-name">{name}</h2>}
          </div>
          <div className="slider-menu">
            <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
              <Menu.Item key={`${match.url}/home`} icon={<HomeOutlined />}>
                <Link to={`${match.url}/home`}>Home</Link>
              </Menu.Item>
              {role === ADMIN && (
                <Menu.Item key={`${match.url}/allUsers`} icon={<UsergroupAddOutlined />}>
                  <Link to={`${match.url}/allUsers`}>All Users</Link>
                </Menu.Item>
              )}
              <Menu.Item key={`${match.url}/setting`} icon={<SettingOutlined />}>
                <Link to={`${match.url}/setting`}>Setting</Link>
              </Menu.Item>
              <Menu.Item key={`${match.url}/logout`} icon={<LogoutOutlined />}>
                <Button
                  className="slider-btn"
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
