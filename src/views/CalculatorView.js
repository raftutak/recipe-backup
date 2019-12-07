import React from 'react';

import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';

class CalculatorView extends React.Component {
  render() {
    return (
      <>
        <h1>CalculatorBMI View</h1>
        <Recommendations />
        <Footer />
      </>
    );
  }
}

export default CalculatorView;
