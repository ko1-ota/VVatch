import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";


export default class Header extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#">VVatch</NavbarBrand>
        <Nav navbar>
          <NavItem href="#">
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink href="#">Link</NavLink>
          </NavItem>
          {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown> */}
        </Nav>
      </Navbar>
    );
  }
}