import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import RecipeCard from '../interface/RecipeCard';

import { Container, CardDeck } from 'react-bootstrap';

// const StyledWrapper = styled.div`
//   padding: 40px;
//   text-align: left;
// `;

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 0;
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
            <>
              <Container fluid>
                <InnerWrapper>
                  <CardDeck id="recipeList">
                    {context.search_result.map(recipe => {
                      return <RecipeCard key={recipe.title} recipe={recipe} />;
                    })}
                  </CardDeck>
                </InnerWrapper>
              </Container>
            </>
          ) : null
        }
      </AppContext.Consumer>
    );
  }
}

export default RecipeList;
