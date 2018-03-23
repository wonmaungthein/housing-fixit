import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import { LandLord } from "./Components/LandLord/LandLord";
import { Letting } from "./Components/Letting/Letting";
import { Agent } from "./Components/Agent/Agent"; 
import Routes  from "./Components/Routes/Routes";
import "./App.css";
import { TenantReport } from "./Components/Tenant/TenantReport";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to Fix It</h1>

        </header>
        <Router>
        <div>
          <Routes />
          <Route exact path="/" component={TenantReport} />
          <Route exact path="/Letting" component={Letting} />
          <Route exact path="/LandLord" component={LandLord} />
          <Route exact path="/Agent" component={Agent}/> 
        </div>
      </Router>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
