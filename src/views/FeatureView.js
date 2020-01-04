import React from 'react';
import AppContext from '../context';

// COMPONENTS
import LoadingDots from '../components/LoadingDots';
import FeatureSection from '../components/organisms/FeatureSection';

const FeatureView = ({ id }) => {
  console.log(id);

  return (
    <AppContext.Consumer>
      {context => (
        <>
          {context.feature_isLoading && !context.feature_result && (
            <LoadingDots />
          )}
          {!context.feature_isLoading && <FeatureSection id={id} />}
        </>
      )}
    </AppContext.Consumer>
  );
};

export default FeatureView;
