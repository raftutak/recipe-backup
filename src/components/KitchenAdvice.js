import React from 'react';
import AppContext from '../context';
import styled from 'styled-components';
import { Jumbotron, Container, Carousel, Col, Row }  from 'react-bootstrap';

import ico_png from '../assets/img/ico.png';

import { tips } from '../data/tips';

const StyledJumbotron = styled(Jumbotron)`
    postion: relative;
    height: auto;
    padding: 0;
    margin: 0 auto;
    
    p {
        padding: 0.25em;
        margin: 0 auto;
        color: #31c95f;
        font-weight: 500;
    }

    h4 {
        padding-bottom: 2em;
        margin: 0 auto;
        text-align: center;
        font-size: 1.2rem;
    }

    img {
        width: 100px;
        opacity: 0.075;
    }

`;

const StyledCol = styled(Col)`
    padding: 0;
    margin: 0 auto;
    width: auto;
`;

const StyledContainer = styled(Container)`
   padding: 0;
`;

const StyledRow = styled(Row)`
    padding: 0;
`;

const StyledCarousel = styled(Carousel)`
  margin: 0 auto;
  padding: 0 6%;

  .carousel-control-prev {
    justify-content: left;
    width: auto;
  }

  .carousel-control-prev-icon {
    filter: brightness(70%);
  }

  .carousel-control-next {
    justify-content: right;
    width: auto;
  }

  .carousel-control-next-icon {
    filter: brightness(70%);
  }
`;

const KitchenAdvice = () => (
    <AppContext.Consumer>
        {context => (
            <>
            <StyledContainer>
                <StyledJumbotron fluid>
                    <StyledRow>
                        <StyledCol md="auto">
                            <img src={ico_png} alt="{logo}"/>
                        </StyledCol>
                    </StyledRow>
                    <StyledRow>
                        <StyledCol>
                            <StyledCarousel indicators={false} variant="dark">
                                {tips.map((item, id) => {
                                    return (
                                        <Carousel.Item key={id}>
                                            <>
                                                <StyledRow md="auto">
                                                    <p>
                                                        {item.heading}
                                                    </p>
                                                </StyledRow>
                                                <StyledRow>
                                                    <h4>
                                                        {item.paragraph}
                                                    </h4>
                                                </StyledRow>
                                            </>
                                        </Carousel.Item>
                                    );
                                })}
                            </StyledCarousel>
                        </StyledCol>
                    </StyledRow>
                </StyledJumbotron>
            </StyledContainer>
            </>
        )}
    </AppContext.Consumer>
);

export default KitchenAdvice;