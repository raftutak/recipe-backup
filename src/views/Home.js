import React from 'react';

// COMPONENTS
import RecipeList from '../components/sections/RecipeList';
import SearchForm from '../components/sections/SearchForm';

const Home = () => (
  <>
    <SearchForm />
    <RecipeList />
  </>
);

export default Home;
