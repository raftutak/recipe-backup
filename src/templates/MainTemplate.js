import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import Header from '../components/sections/Header';
import Slider from '../components/sections/Slider';
import Footer from '../components/sections/Footer';

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    {console.log(location.pathname)}
    <Header />
    {location.pathname !== '/recipes' ? <Slider /> : null}
    {children}
    <Footer />
  </>
);

export default MainTemplate;
