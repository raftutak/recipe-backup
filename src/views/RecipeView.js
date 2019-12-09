import React from 'react';
import axios from 'axios';
import AppContext from '../context';

import styled from 'styled-components';

import { Container, ListGroup, Card, Nav } from 'react-bootstrap';

import LoadingDots from '../components/LoadingDots';
import Footer from '../components/Footer';
import Recommendations from '../components/Recommendations';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
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
          {!context.singleRecipe_isLoading && <SingleRecipe />}
          <Recommendations />
          <Footer />
        </>
      )}
    </AppContext.Consumer>
  );
};

export default RecipeView;
