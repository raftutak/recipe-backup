import React from 'react';
import AppContext from '../context';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container, ListGroup, Card, Nav } from 'react-bootstrap';
import { routes } from '../routes';

// PATH OF CURRENT RECIPE
const StyledPath = styled.div`
    margin: 0 0 0 20px;
    padding: 5px;
    font-size: 10pt;
    font-style: italic;
    opacity: 0.7;
    float: right;
`;

const StyledContainer = styled(Container)`
    margin: 0 auto;
    padding: 30px 0;
`;

// LIST OF INGREDIENTS
const StyledIngridients = styled(ListGroup)`
    margin: 0 auto;
    padding: 0;
    width: auto;
    min-width: 450px;
    float: left;
`;

// INGREDIENTS LISTGROUP.ITEM
const StyledIngredientsListGroupItem = styled(ListGroup.Item)`
    border: none;
    border-bottom: 1px solid hsla(215, 37%, 19%, 0.2);
    height: auto;
    font-size: 10pt;
    padding: 8px;

    :hover {
      background-color: hsla(215, 37%, 19%, 0.08);
      border-left: 6px solid #31c95f;
      transition: 0.2s;
    }
`;

// RECIPE NAME
const StyledRecipeName = styled.h4`
    float: left;
    padding: 0;
    font-weight: 600;
`;

// RECIPE IMAGE
const StyledImage = styled(Card)`
    clear: both;
    float: right;
    width: auto;
    transition: 0.2s;

    .border-bottom {
      padding: 10px;
      height: auto;
      background-color: #31c95f;
      color: #fff;
      font-size: 12pt;
    }
`;

// RECIPE DESCRIPTION
const StyledDescription = styled.div`
    margin-top: 20px;
    margin-left: 5px;
    padding: 10px;
    font-size: 10pt;
    float: none;
    clear: both;
`;

import LoadingDots from '../components/LoadingDots';
import Footer from '../components/Footer';
import Recommendations from '../components/Recommendations';

// ROUTER
import SingleRecipe from '../components/SingleRecipe';

const RecipeView = ({ id }) => {
  console.log(id);

  return (
    <AppContext.Consumer>
      {context => (
        <>
          {/* {context.singleRecipe_isLoading && !context.singleRecipe_result && (
          <LoadingDots />
        )}
        {context.singleRecipe_result && <SingleRecipe />} */}
          {context.singleRecipe_isLoading && !context.singleRecipe_result && (
            <LoadingDots />
          )}
          {!context.singleRecipe_isLoading && <SingleRecipe id={id} />}
        </>
      )}
    </AppContext.Consumer>
  );
};

export default RecipeView;
