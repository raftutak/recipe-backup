import React from 'react';
import AppContext from '../context';

// COMPONENTS
import LoadingDots from '../components/LoadingDots';
import SingleRecipeSection from '../components/organisms/SingleRecipeSection';

const SingleRecipeView = ({ id }) => {
  console.log(id);

  return (
    <AppContext.Consumer>
      {context => (
        <>
          {context.singleRecipe_isLoading && !context.singleRecipe_result && (
            <LoadingDots />
          )}
          {!context.singleRecipe_isLoading && <SingleRecipeSection id={id} />}
        </>
      )}
    </AppContext.Consumer>
  );
};

export default SingleRecipeView;
