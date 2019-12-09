import React from 'react';
import AppContext from '../context';

import styled from 'styled-components';

import { Container, ListGroup, Card, Nav } from 'react-bootstrap';

import LoadingDots from '../components/LoadingDots';

// ROUTER
import { NavLink } from 'react-router-dom';
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

const SingleRecipe = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <Container className="mb-4">
          <StyledContainer>
            <StyledPath>
              Jesteś w: recipe-search/przepisy/id_przepisu
            </StyledPath>
            <StyledRecipeName>
              <p>Orkiszowe pierogi z twarogiem i suszonymi pomidorami</p>
              <br></br>
            </StyledRecipeName>
            <StyledImage>
              <img src="http://3.bp.blogspot.com/-dD-p9c29nek/UYPuyiJOl0I/AAAAAAAAE20/nmFDVbExdaQ/s640/1.jpg" />
              <div className="border-bottom">
                Czas przygotowania: 60 minut<br></br>
                Poziom trudności: średni
              </div>
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
              <Nav.Link as={NavLink} to={routes.contact}>
                Skorzystaj z przelicznika miar kuchennych!
              </Nav.Link>
            </StyledIngridients>
          </StyledContainer>
          <StyledDescription>
            <p></p>
            <h4>Rozpoczynamy od przygotowania farszu.</h4>
            Obydwa rodzaje twarogu wkładamy do sporej miski i dodajemy jogurt.
            <br></br>
            Do naczynia wrzucamy również posiekane drobno suszone pomidory,
            szczypiorek, wciskamy czosnek oraz dodajemy przyprawy (na końcu
            pieprz, próbując czy serek jest odpowiednio pikantny).<br></br>
            Całość dokładnie mieszamy.<br></br>
            <br></br>
            <h4>Następnie przygotowujemy ciasto.</h4>
            Na stolnicę wysypujemy mąkę, czosnek, stopniowo dodajemy bardzo
            ciepłą wodę, a na końcu odrobinę oliwy i zagniatamy ciasto, które
            powinno być raczej luźne i miękkie.<br></br>
            <br></br>
            <h4>Przed rozwałkowaniem stolnicę należy podsypać obficie mąką.</h4>
            Ciasto rozwałkowujemy na 2-3 mm placek i sporą szklanką wycinamy
            koła, na które nakładamy porcje farszu. Zlepiamy wedle domowego
            sposobu, lub prosimy mamę o pomoc ;-)<br></br>
            Gotowe pierożki układamy na ściereczce lub posypanej mąką stolnicy.
            Gotujemy około 5 minut w osolonej wodzie (wrzucone na wrzątek).
          </StyledDescription>
        </Container>
      </>
    )}
  </AppContext.Consumer>
);

export default SingleRecipe;
