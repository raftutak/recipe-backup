import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    {console.log(location.pathname)}
    <Navigation />
    {location.pathname !== '/categories' ? <Header /> : null}
    {children}
  </>
);

export default MainTemplate;
