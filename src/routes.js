import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Signin } from "./pages/index";

export default function Routes() {
  return (
    <Router>
      <Route>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/cadastro">
            <Signin />
          </Route>
        </Switch>
      </Route>
    </Router>
  );
}
