import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import SearchSection from '../components/organisms/SearchSection';
import Sidebar from '../components/Sidebar';
import Recommendations from '../components/Recommendations';
import FooterSection from '../components/organisms/FooterSection';
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
        <Container fluid>
          <StyledContainer>
            <Sidebar />
            <StyledRecipeList>
              {context.categories_isLoading && !context.categories_result && (
                <LoadingDots />
              )}
              {context.categories_result && <RecipeList />}
            </StyledRecipeList>
          </StyledContainer>
        </Container>
      </>
    )}
  </AppContext.Consumer>
);

export default CategoriesView;
