import React from 'react';

// STYLES
import styled from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import Nav from '../components/sections/Nav';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

const StyledPadding = styled.div`
  padding-top: 80px;
`;

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    {console.log(location.pathname)}
    <Nav />
    <StyledPadding />
    {location.pathname !== '/recipes' ? <Header /> : null}
    {children}
    {/* <Footer /> */}
  </>
);

export default MainTemplate;
