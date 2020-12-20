//main
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

//components
import GMap from "Components/GMap/GMap";
import CounterTest from "Components/CounterTest/CounterTest";
import SelectForm from "Components/SelectForm/SelectForm";
import Weather from "pages/Weather/Weather";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/Weather" component={Weather} />
      <Route exact path="/" component={GMap} />
      <Route exact path="/counter" component={CounterTest} />
      <Route exact path="/SelectForm" component={SelectForm} />
    </Switch>
  );
};

export default AppRoutes;
