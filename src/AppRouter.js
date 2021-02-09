import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./screens/Form";
import Home from "./screens/Home";
import HiScore from "./components/HiScore";
// import Title from "./screens/Title";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/home" component={Home} />

        </Switch>
      </BrowserRouter>
<div class="score__container">
<HiScore /> 
</div>

    
    </div>
  );
};

// Calling browser router gives access to specified routes inside the app using: Route path =
// In order to use <Route>, it must have <BrowserRouter> (or one of the other router types) somewhere as a parent.

export default AppRouter;
