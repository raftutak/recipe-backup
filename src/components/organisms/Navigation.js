import React from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Userbox from '../molecules/Userbox';

const Navigation = () => (
  <>
    <StyledNavbar collapseOnSelect expand="lg" sticky="top" variant="dark">
      <Container>
        <StyledNavbarBrand>recipe-search</StyledNavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link exact as={NavLink} to={routes.home} eventKey={1}>
              Strona główna
            </Nav.Link>
            <NavDropdown title="Kategorie">
              <NavDropdown.Item as={NavLink} to={routes.categories}>
                Napoje
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={routes.categories}>
                Desery
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={routes.categories}>
                Zupy
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={routes.categories}>
                Dania
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={routes.categories}>
                Dodatki
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={routes.categories}>
                Przekąski
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={routes.categories}>
                Przetwory
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={routes.categories}>
                Pieczywo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to={routes.converter}>
              Przelicznik kuchenny
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.calculatorBMI} eventKey={2}>
              Kalkulator BMI
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.contact} eventKey={3}>
              Kontakt
            </Nav.Link>
          </Nav>
          <Nav>
            <Userbox />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  </>
);

const StyledNavbar = styled(Navbar)`
  background-color: hsl(215, 37%, 19%);
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-family: 'Pacifico', sans-serif;
  font-size: 1.8rem;
`;

export default Navigation;
