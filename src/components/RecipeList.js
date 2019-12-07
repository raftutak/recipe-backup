import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import RecipeCard from './RecipeCard';
import LoadingDots from './LoadingDots';

import { Container, CardDeck, CardColumns } from 'react-bootstrap';

// const StyledWrapper = styled.div`
//   padding: 40px;
//   text-align: left;
// `;

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 0;
`;

const StyledCardColumns = styled(CardColumns)`
  column-count: 4;
`;

class RecipeList extends React.Component {
  // componentDidMount() {
  //   document
  //     .getElementById('search_submitButton')
  //     .scrollIntoView({ behavior: 'smooth' });
  // }

  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context.search_result ? (
            !context.search_isLoading ? (
              <>
                <Container fluid>
                  <InnerWrapper>
                    <StyledCardColumns id="recipeList">
                      {context.search_result.map(recipe => {
                        return (
                          <RecipeCard key={recipe.title} recipe={recipe} />
                        );
                      })}
                    </StyledCardColumns>
                  </InnerWrapper>
                </Container>
              </>
            ) : (
              <LoadingDots />
            )
          ) : null
        }
      </AppContext.Consumer>
    );
  }
}

export default RecipeList;
