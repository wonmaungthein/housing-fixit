import React from "react";
import { Component } from "react";
import "./feedBack.css";

// import { Radio } from "react";
// import { Radio } from "react-radio-group";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import SubmitBottom from "./SubmitBottom";

export class FeedBack extends Component {
  render() {
    return (
      <div className="section">
        <h1>Please fill in the form for the FeedBack.</h1>
        <form>
          <h3>Is the issue fixed?</h3>
          <span className="Radio-button">
            <input type="radio" name="fruit" value="apple" />Yes
          </span>
          <span className="Radio-button">
            <input type="radio" name="fruit" value="orange" />No
          </span>
        </form>
        <label htmlFor="Please leave a message" />Leave a message
        <input className="message" type="message" />
        <span>
          <SubmitBottom />
        </span>
      </div>
    );
  }
}
