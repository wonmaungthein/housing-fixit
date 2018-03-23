import React from "react";
import { Component } from "react";

export class TenantReport extends Component {
  render() {
    return (
      <div>
        <h1>TenantReport Page</h1>
        <section className="first-section">
          <h3>
            {" "}
            We will put the drop down menu to select the issues icon here
          </h3>
        </section>
        <section className="second-section">
          <h3>A few blocks of options of issues the tenenat are facing</h3>
        </section>
        <section className="third-section">
          <h3>Tanent information with name, email, and message</h3>
        </section>
        <section className="fourth-section">
          <h3>Submit bottom</h3>
        </section>
      </div>
    );
  }
}
