import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';

// STYLES
import styled from 'styled-components';
import '@brainhubeu/react-carousel/lib/style.css';

// COMPONENTS
import Container from '../interface/Container';
import Heading from '../interface/Heading';
import Paragraph from '../interface/Paragraph';
import Button from '../interface/Button';

// ASSETS
import slider_bg1 from '../../assets/img/slider_bg1.jpg';
import slider_bg2 from '../../assets/img/slider_bg2.jpg';

// DATA
import { sliderContent } from '../../data/sliderContent';

const StyledSlider = styled.header`
  width: 100%;
  min-height: 360px;
  background-image: url(${props => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledWrapper = styled.div`
  padding: 20px;
  width: 80%;
  text-align: left;

  @media (min-width: 700px) {
    width: 65%;

    ${Heading} {
      font-size: 4rem;
    }

    ${Paragraph} {
      font-size: 1.8rem;
    }
  }
`;

const Slider = () => (
  <>
    <Carousel autoPlay={10000} animationSpeed={2000} infinite>
      <StyledSlider bg={slider_bg1}>
        <Container>
          <StyledWrapper>
            <Heading medium>{sliderContent[0].heading}</Heading>
            <Paragraph medium>{sliderContent[0].paragraph}</Paragraph>
            <Button>Przepisy</Button>
          </StyledWrapper>
        </Container>
      </StyledSlider>
      <StyledSlider bg={slider_bg2}>
        <Container>
          <StyledWrapper>
            <Heading medium color="white">
              {sliderContent[1].heading}
            </Heading>
            <Paragraph medium color="white">
              {sliderContent[1].paragraph}
            </Paragraph>
            <Button>Przepisy</Button>
          </StyledWrapper>
        </Container>
      </StyledSlider>
    </Carousel>
  </>
);

export default Slider;
