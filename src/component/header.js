import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, Button } from "reactstrap";


export default class Header extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#">VVatch</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem href="#">
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <Form inline>
              <FormGroup>
                <Label for="searchBox" hidden>Search</Label>
                <Input type="search" name="search" id="searchBox" placeholder="search"></Input>
              </FormGroup>
              <Button>Search</Button>
            </Form>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}