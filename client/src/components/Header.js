import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';

import styled from 'styled-components';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Styles = styled.div `
    .navbar {
        background-color: #ecb920;
    }

    .navbar-brand, .navbar-nav nav-link {
        color: white;

        &:hover {
            color: white;
        }
    }
    `;


export class Header extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar variant="dark">
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <NavDropdown title={
                      <FontAwesomeIcon icon={faUser} />
                  }
                  id="basic-nav-dropdown">
                    <NavDropdown.Item href="">Create Account</NavDropdown.Item>
                    <NavDropdown.Item href="">Log in</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <FontAwesomeIcon icon={faBars} className="menu" />
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
