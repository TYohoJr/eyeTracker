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


class MyNavbar extends Component {
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
                  <DropdownItem>
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