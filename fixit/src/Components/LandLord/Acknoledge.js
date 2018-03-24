import React from "react";
import { Component } from "react";
import "./acknoledge.css";

export class Acknoledge extends Component {
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
