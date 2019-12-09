import React from 'react';

import LoadingDots from '../components/LoadingDots';

import Calculator from '../components/Calculator';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';

class CalculatorView extends React.Component {
  render() {
    return (
      <>
        <Calculator />
        <LoadingDots />
        <LoadingDots />
        <Recommendations />
        <Footer />
      </>
    );
  }
}

export default CalculatorView;
