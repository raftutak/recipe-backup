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
            <br />
            <br />
            <code>
              {(context.source = context.search_result)}
              <ReactJson src={context.json} />
            </code>
          </Container>
        </StyledWrapper>
      </>
    )}
  </AppContext.Consumer>
);

export default RecipeList;
