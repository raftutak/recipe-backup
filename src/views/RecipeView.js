import React from 'react';
import AppContext from '../context';

import LoadingDots from '../components/LoadingDots';
import Footer from '../components/Footer';
import Recommendations from '../components/Recommendations';

// ROUTER
import SingleRecipe from '../components/SingleRecipe';

const RecipeView = ({ id }) => {
  console.log(id);

  return (
    <AppContext.Consumer>
      {context => (
        <>
          {/* {context.singleRecipe_isLoading && !context.singleRecipe_result && (
          <LoadingDots />
        )}
        {context.singleRecipe_result && <SingleRecipe />} */}
          {context.singleRecipe_isLoading && !context.singleRecipe_result && (
            <LoadingDots />
          )}
          {!context.singleRecipe_isLoading && <SingleRecipe id={id} />}
          <Recommendations />
          <Footer />
        </>
      )}
    </AppContext.Consumer>
  );
};

export default RecipeView;
