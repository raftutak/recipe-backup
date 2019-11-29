import React from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP

import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

// // COMPONENTS
// import Container from '../interface/Container';

// const StyledNav = styled.nav`
//   position: fixed;
//   width: 100%;
// background-color: hsl(215, 37%, 19%);
// box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
//   z-index: 99;

//   i.fas.fa-bars {
//     position: absolute;
//     left: 30px;
//     line-height: 80px;
//     font-size: 2.8rem;
//     color: hsl(0, 100%, 100%);
//   }

//   @media (min-width: 700px) {
//     text-align: left;
//     box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);

//     i.fas.fa-bars {
//       display: none;
//     }
//   }
// `;

// const StyledLogo = styled.span`
//   line-height: 80px;
//   font-family: 'Pacifico', sans-serif;
//   font-size: 2.8rem;
//   text-decoration: none;
//   color: hsl(0, 100%, 100%);

//   @media (min-width: 700px) {
//     padding: 0 40px 0 20px;
//   }
// `;

// const StyledList = styled.ul`
//   display: none;
//   list-style: none;

//   @media (min-width: 700px) {
//     display: inline-block;
//   }
// `;

// const StyledLink = styled.li`
//   display: inline-block;
//   margin-right: 20px;
//   font-weight: 500;
//   text-decoration: none;
//   color: hsla(0, 100%, 100%, 0.6);
//   transition: 0.2s;

//   :hover {
//     color: hsla(0, 100%, 100%, 1);
//   }

//   &.active {
//     color: hsla(0, 100%, 100%, 1);
//     padding-bottom: 16px;
//     border-bottom: 6px solid white;
//   }
// `;

const StyledNavbar = styled(Navbar)`
  height: 80px;
  background-color: hsl(215, 37%, 19%);
  /* box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3); */

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
      border-bottom: 3px solid white;
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
          <Nav.Link as={NavLink} to={routes.recipes}>
            Przepisy
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
    {/* <StyledNav>
      <Container>
        <i className="fas fa-bars" onClick={() => alert('Hamburger Menu')}></i>
        <StyledLogo exact as={NavLink} to="/">
          recipe-search
        </StyledLogo>
        <StyledList>
          <StyledLink
            exact
            as={NavLink}
            to={routes.home}
            activeClassName="active"
          >
            Strona Główna
          </StyledLink>
          <StyledLink as={NavLink} to={routes.recipes} activeClassName="active">
            Przepisy
          </StyledLink>
          <StyledLink as={NavLink} to={routes.contact} activeClassName="active">
            Kontakt
          </StyledLink>
        </StyledList>
      </Container>
    </StyledNav> */}
  </>
);

export default Navigation;
