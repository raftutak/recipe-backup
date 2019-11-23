import React from 'react';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Container from '../interface/Container';

// const StyledWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   padding: 0 20px;
//   text-align: left;
//   height: 81px;
//   background-color: #1e2d42;
//   color: white;
//   width: 100%;
//   box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
//   z-index: 9999;
// `;

// const StyledLogo = styled.h1`
//   display: inline;
//   line-height: 75px;
//   padding-right: 40px;
//   font-family: 'Pacifico';
//   font-size: 2.8rem;
//   font-weight: normal;
//   color: white;
//   text-decoration: none;
// `;

// const StyledContainer = styled(Container)`
//   display: flex;
//   justify-content: space-between;
//   line-height: 75px;
// `;

// const StyledList = styled.ul`
//   display: inline-block;
//   list-style: none;
// `;

// const StyledLink = styled(NavLink)`
//   position: relative;
//   margin-right: 20px;
//   text-decoration: none;
//   color: hsla(0, 100%, 100%, 0.6);
//   top: 0;
//   transition: 0.2s;
//   font-size: 1.6rem;
//   font-weight: 500;

//   :hover {
//     color: hsla(0, 100%, 100%, 1);
//   }

//   &.active {
//     color: hsla(0, 100%, 100%, 1);
//     padding-bottom: 20px;
//     border-bottom: 6px solid white;
//   }
// `;

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: hsl(215, 37%, 19%);
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
  z-index: 99;

  i.fas.fa-bars {
    position: absolute;
    left: 20px;
    line-height: 80px;
    font-size: 2.8rem;
    color: hsl(0, 100%, 100%);
  }

  @media (min-width: 700px) {
    text-align: left;
    box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);

    i.fas.fa-bars {
      display: none;
    }
  }
`;

const StyledLogo = styled.span`
  line-height: 80px;
  font-family: 'Pacifico', sans-serif;
  font-size: 2.8rem;
  text-decoration: none;
  color: hsl(0, 100%, 100%);

  @media (min-width: 700px) {
    padding: 0 40px 0 20px;
  }
`;

const StyledList = styled.ul`
  display: none;
  list-style: none;

  @media (min-width: 700px) {
    display: inline-block;
  }
`;

const StyledLink = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-weight: 500;
  text-decoration: none;
  color: hsla(0, 100%, 100%, 0.6);
  transition: 0.2s;

  :hover {
    color: hsla(0, 100%, 100%, 1);
  }

  &.active {
    color: hsla(0, 100%, 100%, 1);
    padding-bottom: 16px;
    border-bottom: 6px solid white;
  }
`;

const Nav = () => (
  <>
    <StyledNav>
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
    </StyledNav>
  </>
);

export default Nav;
