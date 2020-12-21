//main
import React, { useState } from "react";

//antd components
import { Layout, Menu, Avatar } from "antd";

//andt icon
import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

//scss
import "./VerticalNavbar.scss";

const { Sider } = Layout;

const VerticalNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  return (
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
              Logout
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Sider>
  );
};

export default VerticalNavbar;
