import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Signin, Panel, Profile } from "./pages/index";
import PrivateRoute from "./auth/private.routes";
import { Transition } from "./components";

export default function Routes() {
  return (
    <Router>
      <Route>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/cadastro">
            <Signin />
          </Route>
          <PrivateRoute path="/painel">
            <Transition>
              <h1>Olá</h1>
              <h2>Bem-vindo de volta!</h2>
            </Transition>
            <Panel />
          </PrivateRoute>
          <PrivateRoute path="/perfil">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Route>
    </Router>
  );
}
