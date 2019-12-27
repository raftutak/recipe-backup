import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';
import { Container, CardColumns, CardDeck, CardGroup } from 'react-bootstrap';

// COMPONENTS
import RecipeCardStyled from './RecipeCardStyled';
import LoadingDots from './LoadingDots';

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 0;
`;

class RecipeListStyled extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context.categories_result ? (
            !context.categories_isLoading ? (
              <>
                <Container fluid>
                  <InnerWrapper>
                    <CardGroup id="recipeList">
                      {context.categories_result.map(recipe => {
                        return (
                          <RecipeCardStyled key={recipe.title} recipe={recipe} />
                        );
                      })}
                    </CardGroup>
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

export default RecipeListStyled;
