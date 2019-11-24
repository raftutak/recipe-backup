import React from 'react';
import AppContext from '../../context';
import ReactJson from 'react-json-view';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Container from '../interface/Container';
import Card from '../interface/Card';

const StyledWrapper = styled.div`
  padding: 40px;
  text-align: left;
`;

class RecipeList extends React.Component {
  componentDidMount() {
    document
      .getElementById('search_submitButton')
      .scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <StyledWrapper id="recipeList">
              <Container>
                {/* <code>
                  <ReactJson src={context.search_result} />
                </code> */}
                {context.search_result.map(recipe => {
                  return <Card recipe={recipe} />;
                })}
              </Container>
            </StyledWrapper>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default RecipeList;
