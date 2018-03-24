import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";

export class Letting extends Component {
  render() {
    return (
      <div>
        <h1>Letting</h1>
        <p>
        A letting agent is a term for a facilitator through which an agreement is made between a landlord and tenant for the rental of a residential property. The term is common in countries using British English, including countries of the Commonwealth. In the UK, Australia and New Zealand the agreement between landlord and tenant is normally formalised by the signing of a tenancy agreement. A letting agency will normally charge a commission for their services, usually a percentage of the annual rent.
        Letting agents will often operate under the umbrella of an Estate Agent due to the synergies that exists between the two professions, but there are many agents that deal exclusively with lettings.
        Although there are two main types of renting, letting agents deal primarily with tenancies between private individuals and landlords.
        </p>
        <p>
        <Button color="success"><Link to="/Agent">  Submit   </Link></Button>
       </p>
      </div>
    );
  }
}
