import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import SearchForm from '../components/SearchForm';
import Sidebar from '../components/Sidebar';
import RecipeList from '../components/RecipeList';
import LoadingDots from '../components/LoadingDots';
import { Container } from 'react-bootstrap';

const StyledContainer = styled(Container)`
  padding: 30px 0;
  display: flex;
  flex-direction: rows;
`;

const StyledRecipeList = styled.div`
  margin: 0 auto;
`;

const CategoriesView = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <SearchForm />
        <Container fluid>
          <StyledContainer>
            <Sidebar />
            <StyledRecipeList>
              {context.search_isLoading &&
                context.search_result === undefined && <LoadingDots />}
              {context.search_result !== undefined && (
                <RecipeList id="recipeList" />
              )}
            </StyledRecipeList>
          </StyledContainer>
        </Container>
      </>
    )}
  </AppContext.Consumer>
);

export default CategoriesView;
