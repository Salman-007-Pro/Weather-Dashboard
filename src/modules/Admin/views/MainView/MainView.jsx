import React from "react";
import { Link } from "react-router-dom";

//antd components
import { Layout } from "antd";

//components
import VerticalNavbar from "Components/Shared/VerticalNavbar/VerticalNavbar";

const { Content } = Layout;

const MainView = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <VerticalNavbar />
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ border: "1px solid red" }}>
          <div>Bill is a cat.</div>
          <Link to="/auth/login">Click here</Link>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainView;
