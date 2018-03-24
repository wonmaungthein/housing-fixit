import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import "./formnew.css";

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
            <div>
                 <p>
                 <Button color="success"><Link to="/LandLord">  Register!  </Link></Button>
                </p>
               </div>
          </div>
        </form>
      </div>
    );
  }
}
