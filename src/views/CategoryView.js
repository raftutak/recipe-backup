import React from 'react';

// COMPONENTS
import CategorySection from '../components/organisms/CategorySection';

const CategoryView = ({ id }) => {
  console.log(id);

  return (
    <>
      <CategorySection id={id} />}
    </>
  );
};

export default CategoryView;
