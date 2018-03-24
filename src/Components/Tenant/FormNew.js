import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export class FormNew extends Component {
  render() {
    return (
      <div>
        <form>
          <img src="#" alt="reportingphoto" height="150" width="150" />
          <div className="messagebox">
            <p>
              <label>Additional information</label>
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
                <Button color="success">
                  <Link to="/Decision"> Submit! </Link>
                </Button>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
