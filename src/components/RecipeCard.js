import React from 'react';
import AppContext from '../context';

// REACT-ROUTER
import { Link } from 'react-router-dom';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// DATA
import { categories } from '../data/categories';

const StyledCard = styled(Card)`
  width: 15rem;
  border-radius: 15px;
  transition: 0.2s;

  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .goto {
    a {
      color: hsl(215, 37%, 19%);
      text-decoration: none;
      transition: 0.2s;

      :hover {
        color: white;
      }
    }

    :hover {
      background-color: hsl(215, 37%, 19%);
    }
  }
`;

const RecipeCard = ({ recipe }) => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledCard>
          <Card.Img src={recipe.image_Url} />
          <Card.Header>
            <strong>{recipe.title}</strong>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroupItem>
              <strong>id:</strong> {recipe.id}
            </ListGroupItem>
            <ListGroupItem>
              <strong>blog:</strong> {recipe.blog}
            </ListGroupItem>
            <ListGroupItem>
              <strong>dishId</strong>: {recipe.dishId}
            </ListGroupItem>
            <ListGroupItem>
              <strong>dishMainCategoryId</strong>: {recipe.dishMainCategoryId}
              <br />
              {recipe.dishMainCategoryId !== 0 ? (
                categories[recipe.dishMainCategoryId - 1].name
              ) : (
                <strong style={{ color: 'red' }}>Brak kategorii</strong>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>dishSubCategoryId</strong>: {recipe.dishSubCategoryId}
              <br />
              {recipe.dishMainCategoryId !== 0 ? (
                categories[recipe.dishMainCategoryId - 1].subcategories[
                  categories[
                    recipe.dishMainCategoryId - 1
                  ].subcategories.findIndex(
                    index => index.id === recipe.dishSubCategoryId
                  )
                ].name
              ) : (
                <strong style={{ color: 'red' }}>Brak podkategorii</strong>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>ingredientIds:</strong>{' '}
              {recipe.ingredientIds.map(ingredientID => (
                <span key={ingredientID}>{ingredientID}, </span>
              ))}
            </ListGroupItem>
            <ListGroupItem>
              <Link
                to={{
                  pathname: `/recipe/${recipe.id}`
                }}
              >
                <strong>Przejdź do przepisu</strong>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </StyledCard>
      </>
    )}
  </AppContext.Consumer>
);

export default RecipeCard;
