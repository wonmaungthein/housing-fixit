import React from "react";
import { Component } from "react";


export class LandLord extends Component {
  render() {
    return (
      <div>
        <h1 className="thankyou">Thank you for your report.</h1>
        <p className="thankMessage">
          We have received your report and we will process within seven working
          days.
        </p>
      </div>
    );
  }
}
