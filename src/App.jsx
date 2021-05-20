import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import GuestRouter from "./modules/guest/GuestRouter";

import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./theme/Tema";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={GuestRouter} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
