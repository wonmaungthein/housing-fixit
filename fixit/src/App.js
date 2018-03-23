import React, { Component } from "react";
import "./App.css";
import { TenantReport } from "./Components/Tenant/TenantReport";
import "bootstrap/dist/css/bootstrap.min.css";
import { FeedBack } from "./Components/Tenant/FeedBack";
import { Acknoledge } from "./Components/LandLord/Acknoledge";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Fix It</h1>
        </header>
        <p className="App-intro">
          <div>
            <TenantReport />
          </div>
          <div>{/* <Acknoledge /> */}</div>
          <div>{/* <FeedBack /> */}</div>
        </p>
      </div>
    );
  }
}

export default App;
