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
  DropdownItem,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import MySignUpModal from './MySignUpModal/MySignUpModal';
import MyLogInModal from './MyLogInModal/MyLogInModal.js';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOutUser() {
    localStorage.clear();
    cookie.remove('exercises');
    cookie.remove('username');
    window.location.reload();
  }

  componentWillMount() {
    if(cookie.get('username')) {
      this.props.dispatch({
        type: "changeLogInGreeting",
        logInGreeting: cookie.get('username')
      });
    } else {
      this.props.dispatch({
        type: "changeLogInGreeting",
        logInGreeting: 'Guest'
      })
    }
  }

  render() {
    return (
      <div hidden={this.props.currentPageReducer.hidden}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Eye Tracker</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>User: {this.props.accountCredentialsReducer.logInGreeting}</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <MyLogInModal />
                  </DropdownItem>
                  <DropdownItem>
                    <Button onClick={this.logOutUser}>Log Out</Button>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <MySignUpModal />
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