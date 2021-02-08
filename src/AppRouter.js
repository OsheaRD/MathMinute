import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./screens/Form";
import Home from "./screens/Home";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
