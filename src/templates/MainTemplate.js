// REACT AND PACKAGES
import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import Navigation from '../components/Navigation';
import RegistrationModal from '../components/RegistrationModal';
import Recommendations from '../components/Recommendations';
import KitchenAdvice from '../components/KitchenAdvice';
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
    <KitchenAdvice />
    <Footer />
  </>
);

export default MainTemplate;
