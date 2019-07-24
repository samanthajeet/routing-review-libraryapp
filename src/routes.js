import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Library from "./components/Library";
import App from "./App";
import BookDetail from './components/BookDetail'

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/library/:title" component={BookDetail} />
    <Route path="/library" component={Library} />
    <Route path="/" component={App} />
  </Switch>
);
