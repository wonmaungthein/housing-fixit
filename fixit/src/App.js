import React, { Component } from "react";
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
        <p className="App-intro">
          <TenantReport />
        </p>
      </div>
    );
  }
}

export default App;
