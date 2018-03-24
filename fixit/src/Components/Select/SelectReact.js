import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import "./select.css";

import { Component } from "react";

const styles = {
  width: 100,
  height: 100
};
export class SelectReact extends Component {
  render() {
    return (
      <div>
        {/* <div className="section"> */}
        <label htmlFor="select"> Please select your issues</label>
        <div>
          <input type="text" value="housing" />
          <select name="name" id="" value="housing" />
        </div>
        <div />
        <h3 className="section-heading">
          {" "}
          Please select your issues icon below.
          <div className="imagefolder">
            <img style={styles} src="bath.png" alt="some photos" />
            <img style={styles} src="bedroom.png" alt="some photos" />
            <img style={styles} src="electric.png" alt="some photos" />
            <img style={styles} src="fire.png" alt="some photos" />
          </div>
        </h3>
      </div>
      // </div>
    );
  }
}
