import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import styles from './Navbar.module.scss'

const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Our Work',
    path: '/work'
  },
  {
    name: 'Connect',
    path: '/connect'
  }
]

const dropDownLinks = [
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' }
]

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false // Is navbar open?
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { isOpen } = this.state

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Brobs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navLinks.map((navLink, key) => {
                const { name, path } = navLink
                return (
                  <NavItem key={key}>
                    <Link className="nav-link" to={path}>
                      {name}
                    </Link>
                  </NavItem>
                )
              })}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Users
                </DropdownToggle>
                <DropdownMenu right>
                  {dropDownLinks.map((link, key) => {
                    const { name, path } = link
                    return (
                      <DropdownItem key={key} className={styles.dropDownItem}>
                        <Link to={path}>{name}</Link>
                      </DropdownItem>
                    )
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
