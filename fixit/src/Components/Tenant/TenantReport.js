import React from "react";
import { Component } from "react";

import SubmitBottom from "./SubmitBottom";
import { FormNew } from "./FormNew";

import { DropDomnMenu } from "../Dropmenu/DropDownMenu";


export class TenantReport extends Component {
  render() {
    return (
      <div>
        <DropDomnMenu />
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
          <FormNew />
        </section>
        <section className="fourth-section">
          <SubmitBottom />
        </section>
      </div>
    );
  }
}
