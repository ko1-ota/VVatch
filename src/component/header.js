import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink,
  Form, FormGroup, Label, Input, Button,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdwonOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdwonOpen: !this.state.dropdwonOpen
    });
  }

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
          {/* 検索窓 */}
          <NavItem>
            <Form inline>
              <FormGroup>
                <Label for="searchBox" hidden>Search</Label>
                <Input type="search" name="search" id="searchBox" placeholder="search"></Input>
              </FormGroup>
              <Button>Search</Button>
            </Form>
          </NavItem>
          {/* ユーザードロップダウンメニュー */}
          <NavItem>
            <ButtonDropdown isOpen={this.state.dropdwonOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                User
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>マイページ</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem>各種設定</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}