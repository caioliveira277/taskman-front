import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/index";

export default function Routes() {
  return (
    <Router>
      <Route>
        <Switch>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Route>
    </Router>
  );
}
