import React from 'react';

import styled from 'styled-components';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const StyledCard = styled(Card)`
  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const RecipeCard = ({ recipe }) => (
  <>
    <StyledCard>
      <Card.Img src={recipe.image_Url} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
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
        </ListGroupItem>
        <ListGroupItem>
          <strong>dishSubCategoryId</strong>: {recipe.dishSubCategoryId}
        </ListGroupItem>
        <ListGroupItem>
          <strong>ingredientIds:</strong>{' '}
          {recipe.ingredientIds.map(ingredientID => (
            <>{ingredientID}, </>
          ))}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          <strong>Przejdź do przepisu</strong>
        </Card.Text>
      </Card.Body>
    </StyledCard>
  </>
);

export default RecipeCard;