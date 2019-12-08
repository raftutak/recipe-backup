import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import SearchForm from '../components/SearchForm';
import Sidebar from '../components/Sidebar';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';
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
              {context.categories_isLoading && !context.categories_result && (
                <LoadingDots />
              )}
              {context.categories_result && <RecipeList id="recipeList" />}
            </StyledRecipeList>
          </StyledContainer>
        </Container>
        <Recommendations />
        <Footer />
      </>
    )}
  </AppContext.Consumer>
);

export default CategoriesView;
