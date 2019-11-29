import React from 'react';
import AppContext from '../context';

// COMPONENTS
import RecipeList from '../components/sections/RecipeList';
import SearchForm from '../components/sections/SearchForm';
import LoadingDots from '../components/interface/LoadingDots';
import Recommendations from '../components/sections/Recommendations';

const Home = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <SearchForm />
        {context.search_isLoading && context.search_result === undefined && (
          <LoadingDots />
        )}
        {context.search_result !== undefined && <RecipeList id="recipeList" />}
        <Recommendations />
      </>
    )}
  </AppContext.Consumer>
);

export default Home;
