import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

//antd components
import { Layout } from "antd";

//components
import Weather from "pages/Weather/Weather";
import VerticalNavbar from "Components/Shared/VerticalNavbar/VerticalNavbar";
import NotFound from "Components/Shared/NotFound/NotFound";
import Setting from "Components/Shared/Setting/Setting";
import AllusersContainer from "modules/Admin/views/AllusersContainer/AllusersContainer";

const { Content } = Layout;

const MainView = () => {
  const match = useRouteMatch();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <VerticalNavbar />
      <Layout style={{ minHeight: "100vh" }}>
        <Content>
          <Switch>
            <Route exact path={`${match.url}/setting`} component={Setting} />
            <Route exact path={`${match.url}/home`} component={Weather} />
            <Route exact path={`${match.url}/allUsers`} component={AllusersContainer} />
            <Route exact path={match.url} component={() => <Redirect to={`${match.url}/home`} />} />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainView;
