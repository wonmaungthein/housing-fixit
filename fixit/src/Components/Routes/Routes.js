import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
            <Navbar className="text-success" color="faded" light expand="md">
                <NavbarBrand href="/">  Tenant </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem >
                            <NavLink href="/"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Tenant">TenantReport</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Letting">Letting</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/LandLord">Auto Reply</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Decision">Decision</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/RegisterPage">Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Agent">Agent</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
  }
}

export default Routes;
