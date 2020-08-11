import React from 'react';
import './App.css';
import Home from "./Assets/Components/Home"
import Balance from "./Assets/Components/Balance"
import Recharge from "./Assets/Components/Recharge"
import Catalog from "./Assets/Components/Catalog"
import Subscribe from "./Assets/Components/Subscribe"
import Channel from "./Assets/Components/Channel"
import Services from "./Assets/Components/Services"
import View from "./Assets/Components/View"
import Update from "./Assets/Components/Update"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router basename="dthwebapp">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/balance" component={Balance} />
          <Route path="/recharge" component={Recharge} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/channel" component={Channel} />
          <Route path="/services" component={Services} />
          <Route path="/view" component={View} />
          <Route path="/update" component={Update} />
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
