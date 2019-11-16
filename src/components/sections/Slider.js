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

const StyledWrapper = styled.div`
  padding: 0 20px;
  background-color: white;
  background-image: url(${slider_bg1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledInnerWrapper = styled.div`
  text-align: left;
  width: 62%;
`;

const Slider = () => (
  <>
    <StyledWrapper>
      <Container>
        <StyledInnerWrapper>
          <Heading big>Łatwe przepisy na każdą okazję!</Heading>
          <Paragraph big>
            Witaj na recipe-search! Jest to ogromna baza przepisów zawierająca
            treści z najlepszych polskich blogów kulinarnych. Od dziś nie musisz
            przeglądać wielu stron w poszukiwaniu najlepszego lub najprostszego
            przepisu - wszystko znajdziesz w jednym miejscu, właśnie tutaj.
            Przekonaj się sam korzystając z wyszukiwarki poniżej!
          </Paragraph>
          <Button>Przepisy</Button>
        </StyledInnerWrapper>
      </Container>
    </StyledWrapper>
  </>
);

export default Slider;
