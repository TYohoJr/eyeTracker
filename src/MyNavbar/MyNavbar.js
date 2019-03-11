import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.signUpUser = this.signUpUser.bind(this);
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

  signUpUser() {
    axios.post("/signUpData", { username: "TestUser", password: "SecretPassword" }).then((result) => {
        if (result.data === "Sign Up Successful") {
            console.log(result.data)
        } else {
            alert(result.data)
        }
    })
}

  render() {
    var loggenInUsername = "Guest"
    return (
      <div hidden={this.props.currentPageReducer.hidden}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Eye Tracker</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>User: {loggenInUsername}</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/">
                    Log In
                  </DropdownItem>
                  <DropdownItem>
                    Log Out
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.signUpUser}>
                    Create Account
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect((state) => (state))(MyNavbar);