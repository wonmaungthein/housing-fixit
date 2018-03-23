import React from "react";
import { Component } from "react";
import "./formnew.css";
import SubmitBottom from "./SubmitBottom";
// const alert = e => alert("This is alert");

function alert(e) {
  return alert("This is being clicked.");
}

export class FormNew extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <p>
              <label htmlFor="name">Name</label>
              <input type="name" id="t2" name="name" />
            </p>
          </div>
          <div>
            <p>
              <label>e-mail</label>
              <input type="email" id="t2" name="email" />
            </p>
          </div>

          <div className="messagebox">
            <p>
              <label>Please leave a message</label>
            </p>
            <p>
              <textarea
                id="t3"
                name="msg"
                maxlength="140"
                rows="5"
                placeholder="Message"
              />
            </p>
            <SubmitBottom onClick={alert} />
          </div>
          <p />
        </form>
      </div>
    );
  }
}

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log("The link was clicked.");
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }
