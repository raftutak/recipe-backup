import React from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

// BOOTSTRAP
import { Container, Navbar, Nav } from 'react-bootstrap';

// STYLES
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  height: 80px;
  background-color: hsl(215, 40%, 12%);
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);

  .navbar-brand {
    padding-right: 25px;
    font-family: 'Pacifico', sans-serif;
    font-size: 1.6rem;
  }

  .navbar-nav {
  }

  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
    margin-right: 25px;
    transition: 0.2s ease-in;

    :hover {
      color: hsla(0, 100%, 100%, 1);
    }

    &.active {
      color: hsla(0, 100%, 100%, 1);
    }
  }

  .container {
    align-items: flex-end;
  }
`;

const Navigation = () => (
  <>
    <StyledNavbar fixed="top" variant="dark">
      <Container>
        <Navbar.Brand exact as={NavLink} to={routes.home}>
          recipe-search
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link exact as={NavLink} to={routes.home}>
            Strona główna
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.categories}>
            Przepisy
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.contact}>
            Przelicznik kuchenny
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.contact}>
            Kalkulator BMI
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.contact}>
            Kontakt
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">Logowanie</Nav.Link>
          <Nav.Link href="#">Rejestracja</Nav.Link>
        </Nav>
      </Container>
    </StyledNavbar>
  </>
);

export default Navigation;
