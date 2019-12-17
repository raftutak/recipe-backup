// REACT AND PACKAGES
import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import Navigation from '../components/Navigation';
import RegistrationModal from '../components/RegistrationModal';

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <LoginModal />
    <RegistrationModal />
    {location.pathname === '/' ? <Header /> : null}
    {children}
  </>
);

export default MainTemplate;
