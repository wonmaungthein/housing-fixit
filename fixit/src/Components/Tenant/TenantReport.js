import React from "react";
import { Component } from "react";
import SubmitBottom from "./SubmitBottom";
import { FormNew } from "./FormNew";
import { DropDomnMenu } from "../Dropmenu/DropDownMenu";
import { Boxes } from "../Boxes/Boxes";

export class TenantReport extends Component {
  render() {
    return (
      <div>
        <h1>TenantReport Page</h1>
        <section className="first-section">
          <DropDomnMenu />
        </section>
        <section className="second-section">
          <Boxes />
        </section>
        <section className="third-section">
          <FormNew />
        </section>
        <section className="fourth-section" />
      </div>
    );
  }
}
