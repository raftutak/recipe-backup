import React from 'react';
import Slider from 'react-slick';

// STYLES
import styled, { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// COMPONENTS
import Container from '../interface/Container';
import Heading from '../interface/Heading';
import Paragraph from '../interface/Paragraph';
import Button from '../interface/Button';

// ASSETS
import slider_bg1 from '../../assets/img/slider_bg1.jpg';

// DATA
import { sliderContent } from '../../data/sliderContent';

const StyledHeader = styled.header`
  width: 100%;
  min-height: 360px;
  background-image: url(${props => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledWrapper = styled.div`
  padding: 20px 0 20px 20px;
  width: 80%;
  text-align: left;

  ${({ right }) =>
    right &&
    css`
      text-align: right;
      text-shadow: 0px 0px 10px #000000;
    `}

  @media (min-width: 700px) {
    width: 60%;

    ${Heading} {
      font-size: 4rem;
    }

    ${Paragraph} {
      font-size: 1.8rem;
    }
  }
`;

const StyledCarouselElement = styled.div`
  width: 100%;

  :focus {
    outline: none;
  }
`;

const SliderSettings = {
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  vertical: true,
  pauseOnHover: true,
  focusOnSelect: false
};

const Header = () => (
  <>
    <StyledHeader bg={slider_bg1}>
      <Container>
        <StyledWrapper>
          <Slider {...SliderSettings}>
            <StyledCarouselElement>
              <Heading medium>{sliderContent[0].heading}</Heading>
              <Paragraph medium>{sliderContent[0].paragraph}</Paragraph>
              <Button>Przepisy</Button>
            </StyledCarouselElement>
            <StyledCarouselElement>
              <Heading medium>{sliderContent[1].heading}</Heading>
              <Paragraph medium>{sliderContent[1].paragraph}</Paragraph>
              <Button>Przepisy</Button>
            </StyledCarouselElement>
          </Slider>
        </StyledWrapper>
      </Container>
    </StyledHeader>
  </>
);

export default Header;
