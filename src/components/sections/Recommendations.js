import React from 'react';

// STYLED COMPONENTS
import styled, { css } from 'styled-components';

// BOOTSTRAP
import { Container, Row, Col } from 'react-bootstrap';

// ASSETS
import slider_bg2 from '../../assets/img/slider_bg2.jpg';

const containerContent = (
  <>
    <h4 className="mb-3">Polecany blog</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim
      lorem vel dignissim imperdiet. Quisque et lacus venenatis, mollis lorem
      sed, scelerisque tortor. Quisque rutrum urna vitae leo sagittis, id
      dapibus nibh lobortis. Nulla facilisi.
    </p>
  </>
);

const StyledCol = styled(Col)`
  padding: 0;
`;

const StyledContainerBackground = styled(Container)`
  padding: 0;
  background-color: white;

  ${({ backgroundimage }) =>
    backgroundimage &&
    css`
      background-image: url(${slider_bg2});
      background-position: right top;
      background-repeat: no-repeat;
      background-size: auto;
    `}
`;

const StyledContainer = styled(Container)`
  padding: 30px 50px;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  ${({ grayoverlay }) =>
    grayoverlay &&
    css`
      color: white;
      background-color: rgba(30, 45, 66, 0.7);
    `}
`;

const Recommendations = () => (
  <>
    <Container fluid>
      <Container>
        <Row>
          <StyledCol>
            <StyledContainerBackground backgroundimage={1}>
              <StyledContainer grayoverlay={1}>
                {containerContent}
              </StyledContainer>
            </StyledContainerBackground>
          </StyledCol>
          <StyledCol>
            <StyledContainerBackground>
              <StyledContainer>{containerContent}</StyledContainer>
            </StyledContainerBackground>
          </StyledCol>
        </Row>
      </Container>
    </Container>
  </>
);

export default Recommendations;
