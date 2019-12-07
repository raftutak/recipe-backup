import React from 'react';
import AppContext from '../context';

// COMPONENTS
import RecipeList from '../components/RecipeList';
import SearchForm from '../components/SearchForm';
import LoadingDots from '../components/LoadingDots';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';

const HomeView = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <SearchForm />
        {context.search_isLoading && !context.search_result && <LoadingDots />}
        {context.search_result && <RecipeList id="recipeList" />}
        <Recommendations />
        <Footer />
      </>
    )}
  </AppContext.Consumer>
);

export default HomeView;
