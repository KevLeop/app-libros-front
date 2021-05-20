import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestScreen from "./GuestScreen";

const GuestRouter = () => {
  return (
    <Switch>
      <Route exact="/" component={GuestScreen}></Route>
    </Switch>
  );
};

export default GuestRouter;
