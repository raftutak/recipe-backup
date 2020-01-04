import React from 'react';
import AppContext from '../context';

// COMPONENTS
import LoadingDots from '../components/LoadingDots';
import CategorySection from '../components/organisms/CategorySection';

const CategoryView = ({ id }) => {
  console.log(id);

  return (
    <AppContext.Consumer>
      {context => (
        <>
          {context.category_isLoading && !context.category_result && (
            <LoadingDots />
          )}
          {!context.category_isLoading && <CategorySection id={id} />}
        </>
      )}
    </AppContext.Consumer>
  );
};

export default CategoryView;
