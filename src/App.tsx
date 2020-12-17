import "antd/dist/antd.css";
import React from "react";
import routerList from "./router/router";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
function App(): any {
  return (
    <Router>
      <Switch>
        {routerList.map((route: { path: any; component: any }) => {
          return (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          );
        })}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
