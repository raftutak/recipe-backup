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
import { dishes } from '../data/dishes';
import { ingredients } from '../data/ingredients';
import { ingredientsCategories } from '../data/ingredientsCategories';
import { recipesFeatures } from '../data/recipesFeatures';
import { features } from '../data/features';
import { featuresCategories } from '../data/featuresCategories';
import noimage from '../assets/img/noimage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starChecked } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const StyledCard = styled(Card)`
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

const StyledStar = styled(FontAwesomeIcon)`
  color: hsl(44, 60%, 42%);
`;

const RecipeCard = ({ recipe }) => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledCard>
          <Card.Img
            src={recipe.image_Url}
            onError={e => {
              e.target.onerror = null;
              e.target.src = `${noimage}`;
            }}
          />
          <Card.Header>
            <strong>{recipe.title}</strong>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroupItem>
              <strong>Ocena: </strong>
              <StyledStar icon={starChecked} />
              <StyledStar icon={starChecked} />
              <StyledStar icon={starChecked} />
              <StyledStar icon={starChecked} />
              <StyledStar icon={faStar} />
            </ListGroupItem>
            <ListGroupItem>
              <strong>Źródło:</strong> {recipe.blog}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Kategoria:</strong>{' '}
              {recipe.dishMainCategoryId !== 0 ? (
                categories[recipe.dishMainCategoryId - 1].name
              ) : (
                <strong style={{ color: 'red' }}>Brak kategorii</strong>
              )}
              <br />
              <strong>Podkategoria:</strong>{' '}
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
              <strong>id:</strong> {recipe.id}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Typ dania</strong>: {recipe.dishId}
              <br />
              {recipe.dishId ? (
                dishes[dishes.findIndex(index => index.id === recipe.dishId)]
                  .name
              ) : (
                <strong style={{ color: 'red' }}>Brak dishId</strong>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Kategoria</strong>: {recipe.dishMainCategoryId}
              <br />
              {recipe.dishMainCategoryId !== 0 ? (
                categories[recipe.dishMainCategoryId - 1].name
              ) : (
                <strong style={{ color: 'red' }}>Brak kategorii</strong>
              )}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Podkategoria</strong>: {recipe.dishSubCategoryId}
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
              <strong>ingredientCategoryIds:</strong>{' '}
              {recipe.ingredientCategoryIds.map(
                (ingredientCategoryID, index) => (
                  <span key={ingredientCategoryID}>
                    {ingredientCategoryID}
                    {index < recipe.ingredientCategoryIds.length - 1
                      ? ',\u00A0'
                      : ''}
                  </span>
                )
              )}
              <br />
              {recipe.ingredientCategoryIds.map(ingredientCategoryID => (
                <span key={ingredientCategoryID}>
                  {
                    ingredientsCategories[
                      ingredientsCategories.findIndex(
                        index => index.id === ingredientCategoryID
                      )
                    ].name
                  }
                  ,{' '}
                </span>
              ))}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Składniki:</strong>{' '}
              {recipe.ingredientIds.map(ingredientID => (
                <span key={ingredientID}>{ingredientID}, </span>
              ))}
              <br />
              {recipe.ingredientIds.map(ingredientID => (
                <span key={ingredientID}>
                  {
                    ingredients[
                      ingredients.findIndex(index => index.id === ingredientID)
                    ].name
                  }
                  ,{' '}
                </span>
              ))}
            </ListGroupItem>
            <ListGroupItem>
              <strong>
                Kolor:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 1
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 1
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Okazja:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 2
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 2
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Kuchnia:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 3
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 3
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Koszt:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 4
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 4
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Trudność:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 5
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 5
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Czas przygotowania:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 6
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 6
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Wykluczenia:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 7
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 7
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Sposób przyrządzenia:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 8
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 8
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Posiłek:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 9
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID && index.categoryId === 9
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
              <br />
              <strong>
                Inne:{' '}
                {recipe.featureIds
                  ? recipe.featureIds.map((featureID, index) => (
                      <>
                        {features[
                          features.findIndex(
                            index =>
                              index.id === featureID && index.categoryId === 10
                          )
                        ] &&
                          features[
                            features.findIndex(
                              index =>
                                index.id === featureID &&
                                index.categoryId === 10
                            )
                          ].name + ', '}
                      </>
                    ))
                  : null}
              </strong>
            </ListGroupItem>
            <ListGroupItem>
              <Link
                style={{ textDecoration: 'none', color: 'hsl(215, 37%, 19%)' }}
                onClick={context.handleReadRecipe}
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
