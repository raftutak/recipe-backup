import React from 'react';
import AppContext from '../context';
import styled from 'styled-components';
import { Jumbotron, Container, Carousel, Col, Row }  from 'react-bootstrap';

import ico_png from '../assets/img/ico.png';

const StyledJumbotron = styled(Jumbotron)`
    postion: relative;
    height: auto;
    padding: 0;
    margin: 0 auto;
    
    p {
        padding: 5px;
        margin: 0 auto;
        color: #31c95f;
        font-weight: 500;
    }

    h4 {
        padding-bottom: 20px;
        margin: 0 auto;
        text-align: center;
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
                        <StyledCol md="auto">
                            <p>
                                Porada kuchenna #1
                            </p>
                        </StyledCol>
                    </StyledRow>
                    <StyledRow>
                        <h4>
                            Przy pieczeniu ciast, zamiast jajek możesz użyć banana!
                        </h4>
                    </StyledRow>
                </StyledJumbotron>
            </StyledContainer>
            </>
        )}
    </AppContext.Consumer>
);

export default KitchenAdvice;