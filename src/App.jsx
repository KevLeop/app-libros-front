import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import { NavLink } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./theme/Tema";
import GuestScreen from "./modules/guest/GuestScreen";
import LoginScreen from "./modules/admin/auth/Screens/LoginScreen";
import RegisterScreen from "./modules/admin/auth/Screens/RegisterScreen";
import AdminRouter from "./modules/admin/AdminRouter";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/admin" component={AdminRouter} />

            <Route exact path="/" component={GuestScreen} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
