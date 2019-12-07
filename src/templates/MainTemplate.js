import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import RegistrationModal from '../components/RegistrationModal';

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    {console.log(location.pathname)}
    <Navigation />
    <LoginModal />
    <RegistrationModal />
    {location.pathname !== '/categories' ? <Header /> : null}
    {children}
  </>
);

export default MainTemplate;
