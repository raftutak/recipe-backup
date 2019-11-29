import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import SearchForm from '../components/sections/SearchForm';
import Sidebar from '../components/sections/Sidebar';
import RecipeList from '../components/sections/RecipeList';

const StyledWrapper = styled.div`
  padding: 0 20px;
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: rows;
`;

const Recipes = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <SearchForm />
        <StyledWrapper>
          <StyledContainer>
            <Sidebar />
            <RecipeList />
          </StyledContainer>
        </StyledWrapper>
      </>
    )}
  </AppContext.Consumer>
);

export default Recipes;
