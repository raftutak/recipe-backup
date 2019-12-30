// REACT AND PACKAGES
import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import Header from '../components/organisms/Header';
import LoginModal from '../components/LoginModal';
import Navigation from '../components/organisms/Navigation';
import RegistrationModal from '../components/RegistrationModal';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';
import BlockSection from '../components/organisms/BlockSection';

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <LoginModal />
    <RegistrationModal />
    {location.pathname === '/' ? <Header /> : null}
    {children}
    {/* <BlockSection /> */}
    <Recommendations />
    <Footer />
  </>
);

export default MainTemplate;
