import React from 'react';
import AppContext from '../context';

// COMPONENTS
import SearchResultStyled from '../components/SearchResultStyled';
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
        {context.search_result && <SearchResultStyled id="recipe-list" />}
      </>
    )}
  </AppContext.Consumer>
);

export default HomeView;
