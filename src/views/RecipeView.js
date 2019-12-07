import React from 'react';
import axios from 'axios';
import AppContext from '../context';
import styled from 'styled-components';
import { Container, ListGroup, Card } from 'react-bootstrap';

const StyledPath = styled.div`
    margin: 0 0 0 20px;
    padding: 5px;
    font-size: 10pt;
    font-style: italic;
    opacity: 0.7;
`;

const StyledContainer = styled(Container)`
    margin: 0 auto;
    padding: 30px 0;
`;

const StyledIngridients = styled(ListGroup)`
    margin: 0 auto;
    padding: 0;
    width: auto;
    min-width: 450px;
    float: left;
`;

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

const StyledRecipeName = styled.h3`
    text-align: right;
    padding: 0;
    font-weight: 600;
`;

const StyledImage = styled(Card)`
    float: right;
    width: 1 rem;
    transition: 0.2s;

    .card-img {
      width: 20%;
      height: 10px;
      object-fit: cover;
      border-radius: 15px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
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
              <StyledPath>
                Jesteś w: recipe-search/przepisy/id_przepisu
              </StyledPath>
              <StyledRecipeName>
                <p>Pierogi orkiszowe z twarożkiem</p>
              </StyledRecipeName>
              <StyledImage>
                <img src="http://3.bp.blogspot.com/-dD-p9c29nek/UYPuyiJOl0I/AAAAAAAAE20/nmFDVbExdaQ/s640/1.jpg" />
              </StyledImage>              
              <StyledIngridients>
                <h4>Lista składników</h4>
                <StyledIngredientsListGroupItem>
                  350 g razowej mąki orkiszowej
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  250 ml bardzo ciepłej wody
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  1 łyżeczka oliwy z oliwek
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  1/2 łyżeczki czosnku granulowanego
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  250 g chudego twarogu
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  300 g mielonego chudego twarogu
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  2 łyżki jogurtu naturalnego
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  2 ząbki czosnku
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  3-4 łyżki posiekanego szczypiorku
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  100 g suszonych pomidorów
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  2 łyżki suszonej bazylii
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  świeżo zmielony pieprz
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  3/4 łyżeczki soli
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  100 ml jogurtu naturalnego
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  1 ząbek czosnku
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  1 łyżka mieszanki Kamis - suszone pomidory/bazylia/czosnek
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  1 łyżeczka koncentratu pomidorowego
                </StyledIngredientsListGroupItem>
                <StyledIngredientsListGroupItem>
                  odrobina soli
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
