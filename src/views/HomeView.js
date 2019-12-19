import React from 'react';
import AppContext from '../context';

// COMPONENTS
import SearchResult from '../components/SearchResult';
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
        {context.search_result && <SearchResult id="recipe-list" />}
      </>
    )}
  </AppContext.Consumer>
);

export default HomeView;
