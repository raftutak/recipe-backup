import React from 'react';
import AppContext from '../context';

// COMPONENTS
import RecipeList from '../components/sections/RecipeList';
import SearchForm from '../components/sections/SearchForm';
import LoaderSpinner from '../components/interface/LoaderSpinner';

const Home = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <SearchForm />
        {context.search_isLoading && context.search_result === undefined && (
          <LoaderSpinner type="ThreeDots" color="#ddd" height={50} width={50} />
        )}
        {context.search_result !== undefined && <RecipeList id="recipeList" />}
      </>
    )}
  </AppContext.Consumer>
);

export default Home;
