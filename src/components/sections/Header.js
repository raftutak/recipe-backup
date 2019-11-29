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
  padding: 32px 0;
  background-image: url(${slider_bg1});
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledContainer = styled(Container)``;

const InnerWrapper = styled(Container)`
  margin: 0;
  padding: 0;
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

const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: hsl(215, 37%, 19%);
  border: 1px solid hsl(215, 37%, 19%);
  border-radius: 15px;

  :hover {
    background-color: white;
    border: 1px solid hsl(215, 37%, 19%);
    color: hsl(215, 37%, 19%);
  }
`;

const Header = () => (
  <>
    <StyledJumbotron fluid>
      <StyledContainer>
        <InnerWrapper>
          <StyledCarousel indicators={false} variant="dark">
            {sliderContent.map((item, id) => {
              return (
                <StyledCarouselItem key={id}>
                  <>
                    <h1 className="mb-4">{item.heading}</h1>
                    <p className="mb-4">{item.paragraph}</p>
                    <StyledButton>Przejdź do przepisów</StyledButton>
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
