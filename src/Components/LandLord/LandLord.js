import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";


export class LandLord extends Component {
  render() {
    return (
      <div>
        <h1 className="thankyou">Thank you for your report.</h1>
        <p className="thankMessage">
          We have received your report and we will process within seven working
          days.
        </p>
        <div>
        <p>
              <Button color="success"><Link to="/Tenant">  Exit  </Link></Button>
             </p>
            </div>
            <div>
              <p>
              <Button color="info"><Link to="/LandLord"> Accept  </Link></Button>
             </p>
             </div>
      </div>
    );
  }
}
