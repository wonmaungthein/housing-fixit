import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";

export class Decision extends Component {
  render() {
    return (
      <div>
        <h1>Decision</h1>
        <p>When the Issues is less than £ 50 -it coil directly point to relevant
          maintaince team.
        </p>
        <div>
              <p>
              <Button color="success"><Link to="/Tenant">  OF £50   </Link></Button>
             </p>
            </div>
            <div>
              <p>
              <Button color="info"><Link to="/Letting"> OVER £50  </Link></Button>
             </p>
            </div>
      </div>
    );
  }
}