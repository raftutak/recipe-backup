import React from 'react';

// STYLES
import styled from 'styled-components';

// BOOTSTRAP
import { Jumbotron, Container, Carousel, Button } from 'react-bootstrap';

// ASSETS
import slider_bg1 from '../../assets/img/slider_bg1.jpg';

// DATA
import { sliderContent } from '../../data/sliderContent';

const StyledJumbotron = styled(Jumbotron)`
  margin: 0;
  background-image: url(${slider_bg1});
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledContainer = styled(Container)``;

const InnerWrapper = styled(Container)`
  margin: 0;
  width: 70%;
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

const StyledCarouselItem = styled(Carousel.Item)``;

const Header = () => (
  <>
    <StyledJumbotron fluid>
      <StyledContainer>
        <InnerWrapper>
          <StyledCarousel indicators={false} variant="dark">
            {sliderContent.map(item => {
              return (
                <StyledCarouselItem>
                  <>
                    <h1>{item.heading}</h1>
                    <p>{item.paragraph}</p>
                    <Button>Przejdź do przepisów</Button>
                  </>
                </StyledCarouselItem>
              );
            })}
          </StyledCarousel>
        </InnerWrapper>
      </StyledContainer>
    </StyledJumbotron>
  </>
);

export default Header;
