import React from 'react';
import axios from 'axios';
import AppContext from '../context';
import styled from 'styled-components';
import { Container, ListGroup } from 'react-bootstrap';

const StyledContainer = styled(Container)`
    margin: 0 auto;
    padding: 30px 0;
`;

const StyledIngridients = styled(ListGroup)`
    margin: 0 auto;
    padding: 0;
    width: 500px;
    float: left;
`;

const StyledIngredientsListGroupItem = styled(ListGroup.Item)`
    :hover {
      background-color: hsla(215, 37%, 19%, 0.1);
    }
`;

const StyledRecipeName = styled.h3`
    text-align: right;
    padding: 0;
`;

class RecipeView extends React.Component {
  componentDidMount = async event => {
    this.setState({
      recipe_isLoading: true,
      recipe: undefined
    });

    let { id } = this.props.match.params;

    let url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?id=${id}`;
    const response = await axios(url);
    const recipe_result = await response.data.recipe;

    this.setState({ recipe: recipe_result, recipe_isLoading: false });

    console.log(this.state.recipe);
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <>
          <Container>
            <StyledContainer fluid>
              <StyledRecipeName>
                <p>Pierogi orkiszowe z twarożkiem</p>
              </StyledRecipeName>

              <StyledIngridients>
                <StyledIngredientsListGroupItem>
                  ASD
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  ASD
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  ASD
                </StyledIngredientsListGroupItem>

              </StyledIngridients>
            </StyledContainer> 
          </Container>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}
export default RecipeView;
