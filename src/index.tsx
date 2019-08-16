import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { ReusableProvider } from "reusable";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import MainPage from "./containers/MainPage";
import NodesPage from "./containers/NodesPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const routing = (
  <ReusableProvider>
    <BrowserRouter basename={"/enui"}>
      <Switch>
        <Route path="/main" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/nodes" component={NodesPage} />
      </Switch>
    </BrowserRouter>
  </ReusableProvider>
);

ReactDOM.render(routing, document.getElementById("root"));
