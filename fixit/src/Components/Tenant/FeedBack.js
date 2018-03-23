import React from "react";
import { Component } from "react";
// import { Radio } from "react";
// import { Radio } from "react-radio-group";
import { RadioGroup, RadioButton } from "react-radio-buttons";

export class FeedBack extends Component {
  render() {
    return (
      <div>
        <h1>Please fill in the form for the FeedBack.</h1>
        <form>
          <h3>Is the issue fixed?</h3>
          <input type="radio" name="fruit" value="apple" />Yes
          <input type="radio" name="fruit" value="orange" />No
        </form>
        <label htmlFor="Please leave a message" />Leave a message
        <input type="message" placeholder="Leave a message" />
        {/* <Radio>Yes</Radio>

        <p>
          We have received your report and we will process within seven working
          days.
        </p> */}
      </div>
    );
  }
}
