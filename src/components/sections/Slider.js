import React from 'react';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Container from '../interface/Container';
import Heading from '../interface/Heading';
import Paragraph from '../interface/Paragraph';
import Button from '../interface/Button';

// ASSETS
import slider_bg1 from '../../assets/img/slider_bg1.jpg';

// DATA
import { sliderContent } from '../../data/sliderContent';

const StyledSlider = styled.header`
  min-height: 360px;
  background-image: url(${slider_bg1});
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
    <StyledSlider>
      <Container>
        <StyledWrapper>
          <Heading medium>{sliderContent[0].heading}</Heading>
          <Paragraph medium>{sliderContent[0].paragraph}</Paragraph>
          <Button>Przepisy</Button>
        </StyledWrapper>
      </Container>
    </StyledSlider>
  </>
);

export default Slider;
