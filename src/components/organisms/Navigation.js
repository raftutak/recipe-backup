import React from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

import { useAuth0 } from '../../react-auth0-spa';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const Navigation = () => {
  const { isAuthenticated, loginWithPopup, logout, loading, user } = useAuth0();

  return (
    <StyledNavbar collapseOnSelect expand="lg" fixed="top" variant="dark">
      <Container>
        <StyledNavbarBrand>recipe-search</StyledNavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link exact as={NavLink} to={routes.home}>
              Strona główna
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to={routes.categories}>
              Przepisy
            </Nav.Link> */}
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
            {/* <Nav.Link as={NavLink} to={routes.converter}>
                    Przelicznik kuchenny
                  </Nav.Link> */}
            <Nav.Link as={NavLink} to={routes.calculatorBMI}>
              Kalkulator BMI
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.contact}>
              Kontakt
            </Nav.Link>
          </Nav>
          <Nav>
            {!isAuthenticated ? (
              <>
                <StyledButton
                  onClick={() => loginWithPopup({})}
                  variant="secondary"
                >
                  Logowanie / Rejestracja
                </StyledButton>
              </>
            ) : (
              <>
                <StyledButton authenticated variant="secondary">
                  {loading || !user ? (
                    <div>Loading...</div>
                  ) : (
                    <div>Zalogowany jako {user.name}</div>
                  )}
                </StyledButton>
                <StyledButton
                  logout
                  onClick={() => logout()}
                  variant="secondary"
                >
                  Wyloguj
                </StyledButton>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Navbar)`
  background-color: hsl(215, 37%, 19%);
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-family: 'Pacifico', sans-serif;
  font-size: 1.8rem;
`;

const StyledButton = styled(Button)`
  margin: 3px 0 4px 10px;
  padding: 6px 12px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;

  :hover {
    background-color: hsl(44, 60%, 42%);
  }

  ${({ authenticated }) =>
    authenticated &&
    css`
      background-color: hsl(44, 60%, 42%);
    `}

  ${({ logout }) =>
    logout &&
    css`
      :hover {
        background-color: hsl(348, 45%, 40%);
      }
    `}
`;

export default Navigation;
