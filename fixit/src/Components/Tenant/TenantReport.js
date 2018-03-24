import React from "react";
import { Component } from "react";
import SubmitBottom from "./SubmitBottom";
import { FormNew } from "./FormNew";
import { SelectReact } from "../Select/SelectReact";

export class TenantReport extends Component {
  render() {
    return (
      <div>
        <h1>Tenant Report Page</h1>
        <SelectReact />
        <FormNew />
      </div>
    );
  }
}
