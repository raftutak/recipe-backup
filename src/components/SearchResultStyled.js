import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import RecipeCardStyled from './RecipeCardStyled';
import LoadingDots from './LoadingDots';

import { Container, CardColumns, CardGroup } from 'react-bootstrap';

// const StyledWrapper = styled.div`
//   padding: 40px;
//   text-align: left;
// `;

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 0;
`;

const StyledCardGroup = styled(CardGroup)`
  column-count: 4;
`;

class SearchResultStyled extends React.Component {
  // componentDidMount() {
  //   document
  //     .getElementById('search-form')
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
                    <StyledCardGroup>
                      {context.search_result.map(recipe => {
                        return (
                          <RecipeCardStyled key={recipe.title} recipe={recipe} />
                        );
                      })}
                    </StyledCardGroup>
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

export default SearchResultStyled;
