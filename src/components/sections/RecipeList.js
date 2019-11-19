import React from 'react';
import AppContext from '../../context';
import ReactJson from 'react-json-view';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Container from '../interface/Container';

const StyledWrapper = styled.div`
  padding: 40px;
`;

const RecipeList = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledWrapper>
          <Container>
            <code>
              <ReactJson src={context.search_result} />
            </code>
          </Container>
        </StyledWrapper>
      </>
    )}
  </AppContext.Consumer>
);

export default RecipeList;
