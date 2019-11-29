import React from 'react';
import AppContext from '../../context';
import ReactJson from 'react-json-view';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Container from '../interface/Container';
import RecipeCard from '../interface/RecipeCard';

// const StyledWrapper = styled.div`
//   padding: 40px;
//   text-align: left;
// `;

const InnerWrapper = styled(Container)`
  margin: 0 auto;
`;

const StyledRecipeList = styled.section`
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-content: center;
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
                  <StyledRecipeList id="recipeList">
                    {/* <code>
                  <ReactJson src={context.search_result} />
                </code> */}
                    {context.search_result.map(recipe => {
                      return <RecipeCard key={recipe.title} recipe={recipe} />;
                    })}
                  </StyledRecipeList>
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
