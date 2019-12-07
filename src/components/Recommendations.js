import React from 'react';

// STYLED COMPONENTS
import styled, { css } from 'styled-components';

// BOOTSTRAP
import { Container, Row, Col, Carousel } from 'react-bootstrap';

// ASSETS
import slider_bg2 from '../assets/img/slider_bg2.jpg';

// DATA
import { recommendationsContent } from '../data/recommendationsContent';

const containerContent = (
  <>
    <h5
      className="mb-3"
      style={{ color: 'white', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}
    >
      <strong>Kulinarna porada</strong>
    </h5>
    <p style={{ color: 'white', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}>
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
  padding: 30px 30px;
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

const StyledCarousel = styled(Carousel)`
  margin: 0;
  padding: 0 7%;

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

const Recommendations = () => (
  <>
    <Container fluid>
      <Container
      // style={{ boxShadow: '0 0 15px 0 hsla(0, 0%, 0%, 0.3)' }}
      >
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
              <StyledContainer>
                <h5 className="mb-4">
                  <strong>Sprawdź nasze źródła</strong>
                </h5>
                <StyledCarousel indicators={false} variant="dark">
                  {recommendationsContent.map((item, id) => {
                    return (
                      <Carousel.Item key={id}>
                        <>
                          <img
                            style={{ width: '350px' }}
                            src={item.src}
                            alt={id}
                          />
                        </>
                      </Carousel.Item>
                    );
                  })}
                </StyledCarousel>
              </StyledContainer>
            </StyledContainerBackground>
          </StyledCol>
        </Row>
      </Container>
    </Container>
  </>
);

export default Recommendations;
