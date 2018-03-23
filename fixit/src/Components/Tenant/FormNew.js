import React from "react";
import { Component } from "react";

export class FormNew extends Component {
  render() {
    return (
      <div>
        <form>
          <p>
            <label htmlFor="name">Name</label>
            <input type="name" id="t2" name="name" />
          </p>
          <p>
            <label>What's your e-mail?</label>
            <input type="email" id="t2" name="email" />
          </p>
          <p>
            <label>Leave a short message</label>
            <textarea id="t3" name="msg" maxlength="140" rows="5" />
          </p>
          <p>{/* <button>Submit</button> */}</p>
        </form>
      </div>
    );
  }
}
