import React from 'react';
import './App.css';
import routes from './routes';
import Navigation from './components/Navigation'
import { withRouter } from "react-router";

function App(props) {
  return (
    <div className="App">
      <h1>my rad app</h1>
      <Navigation history={props.history} />
      {routes}
    </div>
  );
}

export default withRouter(App);
